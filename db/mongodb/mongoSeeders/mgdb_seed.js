const db = require('../index');
const _ = require('lodash')

db.Promise = global.Promise;

const now = require('performance-now');

/************** Models ************/
const Movie = require('../mongoModels/movies');
const Showtime = require('../mongoModels/showtimes');
const Theater = require('../mongoModels/theaters');

/*************** Seed generators  ********/
const genMovies = require('../mongoSeeders/mgdb_GenerateMovies');
const genShowtimes = require('../mongoSeeders/mgdb_GenerateShowtimes');
const genTheaters = require('../mongoSeeders/mgdb_GenerateTheaters');

let moviesJSON = genMovies();

let theaterSeeds = genTheaters(5000);


/*********** generate theater ids to supply genShowtimes invocation ******* */


let showtimeSeedsBatch1 = genShowtimes(); // inserts 2,100,420 

// let theaterIds1 = _.range(1, 5000, 1)
// let theaterIds2 = _.range(5000, 10000, 1);
// let theaterIds3 = _.range(10000, 15000, 1);
// let theaterIds4 = _.range(15000, 20000, 1);
// let theaterIds5 = _.range(20000, 25000, 1);


// console.log(showtimeBatch1.length);
// let showtimeBatch2 = genShowtimes(theaterIds2);
// let showtimeBatch3 = genShowtimes(theaterIds3);
// let showtimeBatch4 = genShowtimes(theaterIds4);
// let showtimeBatch5 = genShowtimes(theaterIds5);

// let showtimeSeeds = genShowtimes(); //   
// console.log(showtimeSeeds.length)

/************* inserting Movie records into rottentomatoes ***********/

const insertMovies = (err, movies) => {
  if (err) {
    console.log('err inserting Movies', err);
  } else {
    console.log('these were inserted', movies)
  }
}

Movie.collection.insert(moviesJSON, insertMovies);


// /***************** inserting theater records into mongodb *********************/


async function insertTheaters() {
  let theaterBulkCount = 1;

  while(theaterBulkCount < 6) {
    await Theater.insertMany(theaterSeeds)
      .then(theaters => {
        console.log('inserted theaters');
        theaters
      })
      .catch(err => {
        console.log('err inserting theaters', err);
      })
    theaterBulkCount++;
  }
}

insertTheaters();


// /*************  inserting showtime records into mongodb ******************/


async function insertShowtimes(showtimes) {
  let showtimeBulkCount = 1;

  while (showtimeBulkCount < 6) {
    await Showtime.insertMany(showtimes)
    .then(showtimes => {
        console.log('inserted showtimes');
        showtimes;
      })
      .catch(err => {
        console.log('err inserting showtimes', err);
      })
    showtimeBulkCount++;
  }
  console.log('this was the last bulk entry:', showtimeBulkCount);
}

async function insertBatch(showtimesBulk) {
  let startTime = now()
  let maxBatchSize = 200000;
  let showtimesTotal = 0;
  let startVal = 0;
  let endVal = maxBatchSize;

  while (showtimesTotal < 2100000) {
    let batch = showtimesBulk.slice(startVal, endVal);
    console.log(batch);
    await insertShowtimes(batch);
    showtimesTotal += maxBatchSize;
    startVal += maxBatchSize;
    endVal += maxBatchSize;
  }
  var endTime = now();
  console.log('this is total time inserting showtimes into db:', endTime - startTime);
}

insertBatch(showtimeSeedsBatch1);



