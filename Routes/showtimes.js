const express = require('express');



const router = express.Router();

router.get('showtimes/m/:title/:zipcode/:date', (req, res, next) => {
  console.log('inside crud GET', req.params);
  //query db for showtimes where theater 

});

router.post('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Post', req.params);
  //checkout tickets post number of tickets? or comments or new movie and/or new showtimes
});


router.put('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Update', req.params);
})

router.delete('showtimes/m/:title/:location/:date/:time', (req, res, next) => {
  console.log('inside the crud Delete', req.params);
})


module.exports = router;