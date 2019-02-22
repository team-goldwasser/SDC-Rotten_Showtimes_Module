const express = require('express');
const path = require('path');
const { getTheater, getMovieShowtimes } = require('../db/db.js');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/showtime/:title_url/:zip', (req, res) => {
  const titleUrl = req.params.title_url;

  const data = {
    movie_title_url: titleUrl,
    week_day: new Date().getDay(),
    showtimes: [],
  };

  getTheater(req.params.zip, (theater) => {
    data.theater_id = theater.id;
    data.theater_name = theater.name;
    data.address = theater.address;
    data.city = theater.city;
    data.state = theater.state;
    data.zip = theater.zip;
    data.phone = theater.phone;
    getMovieShowtimes(titleUrl, theater.id, (results) => {
      data.showtimes = results.sort((showtime1, showtime2) => parseInt(showtime1.start_time.split(':').join(''), 10) - parseInt(showtime2.start_time.split(':').join(''), 10));
      res.json(data);
    });
  });
});

// // test
// const data = {
//   movie_title_url: 'the_avengers',
//   week_day: new Date().getDay(),
//   showtimes: [],
// };

// getTheater(95000, (t) => {
//   data.theater_id = t.id;
//   data.theater_name = t.name;
//   data.address = t.address;
//   data.city = t.city;
//   data.state = t.state;
//   data.zip = t.zip;
//   data.phone = t.phone;
//   getMovieShowtimes('the_avengers', t.id, (results) => {
//     data.showtimes = results;
//     console.log(data);
//   });
// });

module.exports = app;
