const db = require('./models/index.js').sequelize;

const { Sequelize } = db;

const Movie = require('./models/movie.js')(db, Sequelize);
const Showtime = require('./models/showtime.js')(db, Sequelize);
const Theater = require('./models/theater.js')(db, Sequelize);

Movie.hasMany(Showtime, { foreignKey: 'movie_id', sourceKey: 'id' });
Theater.hasMany(Showtime, { foreignKey: 'theater_id', sourceKey: 'id' });

module.exports.getTheater = (zip, callback) => {
  Theater.findOne({
    where: {
      zip,
    },
  })
    .then((theater) => { callback(theater, theater.id); });
};

module.exports.getMovieShowtimes = (title, theaterId, callback) => {
  const results = [];

  return Movie.findOne({
    where: {
      title,
    },
  })
    .then((movie) => {
      Showtime.findAll({
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
        .then(() => {
          callback(results);
        });
    });
};
