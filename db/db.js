const db = require('../models/index.js').sequelize;

const {
  Sequelize
} = db;

const Movie = require('../models/movie.js')(db, Sequelize);
const Showtime = require('../models/showtime.js')(db, Sequelize);
const Theater = require('../models/theater.js')(db, Sequelize);
var now = require('performance-now');

Movie.hasMany(Showtime, {
  foreignKey: 'movie_id',
  sourceKey: 'id'
});
Theater.hasMany(Showtime, {
  foreignKey: 'theater_id',
  sourceKey: 'id'
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
