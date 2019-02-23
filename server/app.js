const express = require('express');
const path = require('path');

const { getTheater, getMovieShowtimes } = require('../db/db.js');

const app = express();
// const options = {
//   setHeaders: (res) => {
//     res.set('access-control-allow-origin', '*');
//   },
// };
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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

module.exports = app;
