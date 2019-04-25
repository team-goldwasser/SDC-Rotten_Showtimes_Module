const db = require('../models/index.js').sequelize;

const {
  Sequelize
} = db;

const Movie = require('../models/movie.js')(db, Sequelize);
const Showtime = require('../models/showtime.js')(db, Sequelize);
const Theater = require('../models/theater.js')(db, Sequelize);
var now = require('performance-now');

  Movie.hasMany(Showtime, {
    as: 'movie',
    foreignKey: 'movie_id',
    sourceKey: 'id',
    constraints: false
  })
    
  Theater.hasMany(Showtime, {
    as: 'theater',
    foreignKey: 'theater_id',
    sourceKey: 'id',
    constraints: false
  });

  // Theater.belongsToMany(Showtime, {
  //   through: 'Showtime', 
  //   foreignKey: 'theater_id', 
  //   sourceKey: 'id',
  //   constraints: false
  // });

  // Movie.belongsToMany(Showtime, {
  //   through: 'Showtime',
  //   foreignKey: 'movie_id',
  //   sourceKey: 'id',
  //   constraints: false
  // })

  Showtime.belongsTo(Movie, {
    underscorded: true,
    foreignKey: 'movie_id',
    constraints: false
  });
  
  Showtime.belongsTo(Theater, {
    underscorded: true,
    foreignKey: 'theater_id',
    cosntraints: false
  });

  

// get the closest theater
// current definition of 'closest': Math.abs(theaterZip - inputZip)
// reference of sequelize.fn('abs') https://github.com/sequelize/sequelize/issues/2657
// can improve this query by adding a GMap API call in the future
module.exports.getTheater = (zip, callback) => {
  var startTime = now();
  Theater.findOne({
    where: {
      zip: zip
    }
  }).catch((err) => {
    console.log(`get theater in db error: ${err}`);
  }).then((theater) => {
    var endTime = now();
    console.log('***getTheater query performance time:', endTime - startTime);
    callback(theater);
  })


  //findOne by zipcode
  //if no theater with that zip
  //return the default theater

  //   Theater.findAll({
  //       limit: 1,
  //       order: [
  //         [db.fn('abs', db.condition(db.col('zip'), '-', zip)), 'ASC']
  //       ],
  //     })
  //     .catch((err) => {
  //       console.log(`get theater in db error: ${err}`);
  //     })
  //     .then((theaters) => {
  //       var endTime = now();
  //       console.log('***getTheater query performance time:', endTime - startTime);
  //       callback(theaters[0]);
  //     });

};

module.exports.getMovieShowtimes = (titleUrl, theaterId, callback) => {
  var startTime = now();
  const results = [];

  Movie.findOne({
      where: {
        title_url: titleUrl,
      },
    })
    .then((movie) => {
      Showtime.findAll({
          include: [{
            model: Showtime,
            required: true
          }],
          where: {
            movie_id: movie.id,
            theater_id: theaterId,
            week_day: new Date().getDay(),
          },
        })
        .then((showtimes) => {
          showtimes.forEach((showtime) => {
            results.push({
              id: showtime.id,
              start_time: showtime.start_time,
              seat: showtime.seat,
            });
          });
        })
        .catch((err) => {
          console.log(`get showtimes in db error: ${err}`);
        })
        .then(() => {
          var endTime = now();
          console.log('***getMovieShowtime query performance time:', endTime - startTime);
          callback(results);
        });
    });
};


module.exports.addShowtimes = (query, callback) => {
  var start = now();
  const { id, title_url, week_day, start_time, seat } = query;
  Movie.findOne({ where: {
        title_url: title_url
      }})
  .then(movie => {
    const movie_id = movie.id;
    Showtime.create({
        week_day: week_day,
        start_time: start_time,
        seat: seat,
        theater_id: id,
        movie_id: movie_id
      })
      .then(showtime => {
        console.log('success creating a showtime', showtime.id);
        callback(showtime.id)
      })
      .catch(err => {
        console.log('err creating showtime', err);
      })
      .then(() => {
        var end = now();
        console.log('***addShowtime query performance time:', end - start);
      })
  })
}

module.exports.updateShowtime = (query, callback) => {
  var start = now();
  const { id, title_url, week_day, start_time, seat} = query;

  Showtime.findOne({ where: { id: id }})
    .then(showtime => {
      showtime.update({
        id: id,
        week_day: week_day,
        start_time: start_time,
        seat: seat
      }, { fields: ['week_day', 'start_time', 'seat']
    })
      return showtime.save();
  })
  .then(result => {
    console.log('updated showtime', result);
    callback(result)
  })
  .catch(err => {
    console.log('err updating a single showtime', err);
})
  var end = now();
  console.log('***updateShowtime query performance time:', end - start);
}


module.exports.deleteShowtime = (query, callback) => {
  var start = now();
  console.log('this is the showtime id', query.id);
  Showtime.findOne({ where: { id: query.id }})
  .then(showtime => {
    return showtime.destroy()
  })
  .then(result => {
    console.log('deleted showtime', result);
    callback(query.id);
  })
  .catch(err => console.log('err trying to delete showtime', err))
  var end = now();
  console.log('time for the deleteShowtime:', end - start);
}