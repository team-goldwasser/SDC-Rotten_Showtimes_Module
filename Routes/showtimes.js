const express = require('express');


const {getTheater, getMovieShowtimes} = require('../db/db.js');

const { addShowtime, updateShowtime, deleteShowtime } = require('../controller/showtime');

const router = express.Router();



router.get('/movies/:zip', (req, res) => {
  console.log('inside get theaters by city/ title', req.params);
  const zip = req.params.zip;
  
  

  res.status(200).json({})
})

// route to add a showtime to the showtimes table for a theater at zipcode for a movie with title_url
app.post('/theater/:id/:title_url/:start_time/', (req, res) => {
  
  console.log('in the post showtime route', req.params);



})


router.put('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Update', req.params);
})

router.delete('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Delete', req.params);
})


module.exports = router;