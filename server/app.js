require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

/* redis setup */
const client = require('./redisCache');
const Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_HOST)
const cacheQuery = require('./redisCache').cacheQuery;

const { getTheater, getMovieShowtimes, addShowtimes, updateShowtime, deleteShowtime } = require('../db/db.js');


const app = express();


app.use('/m/', cacheQuery);

// app.use('/m/:title_url/', express.static(path.join(__dirname, '../dist')));
app.use('/m/:title_url/:zip', express.static(path.join(__dirname, '../dist')));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());


app.use('/m/health/', (req, res, next) => {
 console.log('inside this aws request health handler');
 var host = req.hostname;
 var origUrl = req.originalUrl;
  //         // console.log(`this is baseurl ${baseUrl}:, ${requestUrl}, this is the ip: ${requestIp}`);
   console.log(`this is the host: ${host} and this is the origUrl: ${origUrl}`);
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
  console.log(`app.js: in GET ${req.originalUrl}`);
  const origUrl = req.originalUrl;

  const data = {
    movie_title_url: titleUrl,
    week_day: new Date().getDay(),
    showtimes: [],
  };

  const fallbackData = {
    movie_title_url: titleUrl,
    week_day: new Date().getDay(),
    showtimes: [],
    theater_id: 0,
    theater_name: "Arclight Disaster Movies",
    address: "doesn't exist",
    city: "nowheresville",
    state: "ID",
    zip: 00000,
    phone: "000-000-0000"  
  }
  
  client.get(origUrl, (err, cache) => {
    if (err) {
      console.log('error getting cache', err);
    }
    //if cache exists 
    if (cache) {
    //need to parse after getting from redis, because its stringified when cached
      //could check if the cache object after parsing it out had a length of 10 w/Object.entries
      res.status(200).json(JSON.parse(cache));
    }
  });

  getTheater(req.params.zip, (theater) => {
    
    if(theater === null) {
      res.json(fallbackData);
    }
    data.theater_id = theater.id;
    data.theater_name = theater.name;
    data.address = theater.address;
    data.city = theater.city;
    data.state = theater.state;
    data.zip = theater.zip;
    data.phone = theater.phone;
    
    getMovieShowtimes(titleUrl, theater.id, (results) => {
      data.showtimes = results.sort((showtime1, showtime2) => parseInt(showtime1.start_time.split(':').join(''), 10) - parseInt(showtime2.start_time.split(':').join(''), 10));
      client.set(req.originalUrl, JSON.stringify(data))
      res.json(data);
    });
  });
});




//example Url: http://localhost:9002/theater/showtime/?id=23256&title_url=black_panther&start_time=1230&week_day=5&seat=standard

app.post('/theater/showtime/', (req, res) => {
  var query = req.query;
  var origUrl = req.originalUrl;
  console.log(`in the post showtime, this is query ${query} and this is originalUrl ${origUrl}`); 

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
    client.del(req.originalUrl, (err, result) => {
      if(err) throw err;
      if(result) {
        client.set(req.originalUrl, (err, update) => {
          if (err) throw err;
          if (update) {
            res.status(202).json({
              "message": `you have successfully updated showtime id#: ${updatedShowtime}`,
              "updatedShowtime": updatedShowtime,
            });
          }
        })
      }
    })

  });
});

//example Url: http://localhost:9002/theater/showtime/?id10500008

app.delete('/theater/showtime/', (req, res) => {
  var query = req.query;
  console.log('in the post showtime route', query);
  deleteShowtime(query, (deletedShowtime) => {
    client.del(req.originalUrl, (err, result) => {
      if(err) throw err;
      if(result) {
        res.status(203).json({
          "message": `you successfully deleted showtime id#: ${deletedShowtime}`,
          "id": deletedShowtime
        });
      }
    });
  });
});


module.exports = app;
