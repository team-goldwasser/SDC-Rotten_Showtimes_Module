// const sample = {
//   week_day: 'Friday',
//   start_time: '19:15',
//   seat: 'standard',
//   theater_id: 3,
//   movie_id: 1
// }

const days = [0, 1, 2, 3, 4, 5, 6];
const seat = ['standard', 'recliner', '3D'];
const startTime = ['00', '15', '30', '45'];
const moviePlayCountPerDay = 6;

// theater operating hours
const open = 10;
const close = 22;

// db id
const theaterIds = [1, 2, 3, 4, 5];
const movieIds = [1, 2, 3, 4, 5];

const generateShowtime = () => {
  const results = [];

  theaterIds.forEach((theaterId) => {
    movieIds.forEach((movieId) => {
      days.forEach((day) => {
        let count = moviePlayCountPerDay;
        while (count > 0) {
          const showtime = {};
          showtime.start_time = `${Math.floor(Math.random() * (close - open) + open)}:${startTime[Math.floor(Math.random() * startTime.length)]}`;
          showtime.week_day = day;
          showtime.seat = seat[Math.floor(Math.random() * seat.length)];
          showtime.theater_id = theaterId;
          showtime.movie_id = movieId;
          results.push(showtime);
          count--;
        }
      });
    });
  });

  return results;
};

module.exports = generateShowtime;
