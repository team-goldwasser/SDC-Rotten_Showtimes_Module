const express = require('express');

const { getTheater, getMovieShowtimes } = require('./db/db.js');

const app = express();
const port = 9002;

app.use(express.static('dist'));
app.listen(port);

app.get('/showtime/:title/:zip', (req, res) => {
  const title = req.params.title.split('%20').join(' ');

  const data = {
    movie_title: title,
    week_day: new Date().getDay(),
    showtimes: [],
  };

  getTheater(req.params.zip, (theater, theaterId) => {
    data.theater_id = theaterId;
    data.theater_name = theater.name;
    data.address = theater.address;
    data.city = theater.city;
    data.state = theater.state;
    data.zip = theater.zip;
    data.phone = theater.phone;
    getMovieShowtimes(title, theaterId, (results) => {
      data.showtimes = results;
      res.json(data);
    });
  });
});

// // test
// const data = {
//   movie_title: 'The Avengers',
//   week_day: new Date().getDay(),
//   showtimes: [],
// };

// getTheater(95000, (t, id) => {
//   data.theater_id = id;
//   data.theater_name = t.name;
//   data.address = t.address;
//   data.city = t.city;
//   data.state = t.state;
//   data.zip = t.zip;
//   data.phone = t.phone;
//   getMovieShowtimes('The Avengers', id, (results) => {
//     data.showtimes = results;
//     console.log(data);
//   });
// });
