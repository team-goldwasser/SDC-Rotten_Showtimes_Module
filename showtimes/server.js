const express = require('express');
const { getMovieZipShowtimes } = require('./db.js');

const app = express();
const port = 9002;

app.listen(port);

app.get('showtime/:title/:zip', (req, res) => {
  const { title, zip } = req.params;

  const defaultTheaterZip = '94107';

  if (zip === 0) {
    getMovieZipShowtimes(title, defaultTheaterZip, (results) => {
      res.json(results);
    });
  } else {
    getMovieZipShowtimes(title, defaultTheaterZip, (results) => {
      res.json(results);
    });
  }
});
