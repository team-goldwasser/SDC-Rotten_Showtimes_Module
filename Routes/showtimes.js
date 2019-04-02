const express = require('express');



const router = express.Router();

// route to get all showtimes from theaters plural based on zipcode
router.get('showtimes/m/:title_url/:zipcode/', (req, res, next) => {
  console.log('inside crud GET', req.params);
  //query db for showtimes where theater 

});

// route to add a showtime to the showtimes table for a theater at zipcode for a movie with title_url
router.post('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Post', req.params);
  
});


router.put('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Update', req.params);
})

router.delete('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Delete', req.params);
})


module.exports = router;