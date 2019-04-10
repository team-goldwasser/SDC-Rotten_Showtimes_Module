const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const { getTheater, getMovieShowtimes, addShowtimes, updateShowtime, deleteShowtime } = require('../db/db.js');


const app = express();


app.use('/m/:title_url/', express.static(path.join(__dirname, '../dist')));
// app.use('/m/:title_url/:zip', express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


app.get('/showtime/:title_url/:zip', (req, res) => {
  const titleUrl = req.params.title_url;
  console.log(`in get /showtime/:title_url/:zip ${titleUrl}`);

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

//example Url: http://localhost:9002/theater/showtime/?id=23256&title_url=black_panther&start_time=1230&week_day=5&seat=standard

app.post('/theater/showtime/', (req, res) => {
  var query = req.query;
  var reRoute = req.route.path;
  console.log('reRoute', reRoute);
  console.log('in the post showtime route', query); 
  addShowtimes(query)
  res.status(201).json({
    message: `success adding new showtime to database`
  });
});

//example Url: http://localhost:9002/theater/showtime/?id10500008=&title_url=black_panther&start_time=1230&week_day=5&seat=standard

app.put('/theater/showtime/', (req, res) => {
  var query = req.query;
  var reRoute = req.route.path;
  console.log('reRoute', reRoute);
  console.log('in the update showtime route', query);
  updateShowtime(query)
  res.status(202).json({
    "message": `you have successfully updated showtime with an id of ${query.id}`
  })
})



app.delete('/theater/showtime/', (req, res) => {
  var query = req.query;
  var reRoute = req.route.path;
  console.log('reRoute', reRoute); // could use for possible redirect
  console.log('in the post showtime route', query);

  deleteShowtime(query)
  res.status(203).json({
    "message": `you successfully deleted the showtime #${query.id}`
  })
})


module.exports = app;
