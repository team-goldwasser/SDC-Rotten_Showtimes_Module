require('newrelic');
require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const { getTheater, getMovieShowtimes, addShowtimes, updateShowtime, deleteShowtime } = require('../db/db.js');


const app = express();


app.use('/m/:title_url/:zip', express.static(path.join(__dirname, '../dist')));
// app.use('/m/:title_url/', express.static(path.join(__dirname, '../dist')));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/m/health/', (req, res, next) => {
  var host = req.hostname;
  var origUrl = req.originalUrl	;
  res.status(200).send('healthy'); 
})





app.get('/:file', (req, res, next) => {
  var file = req.params.file;
  console.log('this is the loadio file', file);
  res.sendFile(file, {root: __dirname}, (err) => {
    if(err) {
      next(err);
    } else {
      console.log('loaderio verification sent');
    }
  });
});

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
  console.log('in the post showtime route', query); 
  addShowtimes(query, (newShowtime) => {
    res.status(201).json({
      message: `success adding showtime id#: ${newShowtime}`,
      id: newShowtime,
      theater_id: query.id
    });
  })
});

//example Url: http://localhost:9002/theater/showtime/?id10500008=&title_url=black_panther&start_time=1230&week_day=5&seat=standard

app.put('/theater/showtime/', (req, res) => {
  var query = req.query;
  console.log('in the update showtime route', query);
  updateShowtime(query, (updatedShowtime) => {
    res.status(202).json({
      "message": `you have successfully updated showtime id#: ${updatedShowtime}`,
      "updatedShowtime": updatedShowtime,
    })
  });
});

//example Url: http://localhost:9002/theater/showtime/?id10500008

app.delete('/theater/showtime/', (req, res) => {
  var query = req.query;
  console.log('in the post showtime route', query);
  deleteShowtime(query, (deletedShowtime) => {
    res.status(203).json({
      "message": `you successfully deleted showtime id#: ${deletedShowtime}`,
      "id": deletedShowtime
    })
  })
});


module.exports = app;
