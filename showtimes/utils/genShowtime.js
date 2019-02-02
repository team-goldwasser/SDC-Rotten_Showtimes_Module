// const sample = {
//   week_day: 'Friday',
//   start_time: '19:15',
//   seat: 'standard',
//   theater_id: 3,
//   movie_id: 1
// }

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const seat = ['standard', 'recliner'];
const startTime = ['00', '15', '30', '45'];
const moviePlayCountPerDay = 6;

// theater operating hours
const open = 9;
const close = 23;

// db id
const theaterIds = [224, 225, 226];
const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const generateShowtime = () => {
  const results = [];

  theaterIds.forEach((theaterId) => {
    movieIds.forEach((movieId) => {
      days.forEach((day) => {
        let count = moviePlayCountPerDay;
        while (count > 0) {
          const showtime = {};
          showtime.week_day = day;
          showtime.start_time = `${Math.floor(Math.random() * (close - open) + open).toString()}:${startTime[Math.floor(Math.random() * startTime.length)]}`;
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
