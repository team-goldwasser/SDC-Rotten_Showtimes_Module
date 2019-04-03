const db = require('../index');

/************** Models ************/
const Movie = require('../mongoModels/movies');
const Showtime = require('../mongoModels/showtimes');
const Theater = require('../mongoModels/theaters');

/*************** Seed generators  ********/
const genMovies = require('../mongoSeeders/mgdb_GenerateMovies');
const genShowtimes = require('../mongoSeeders/mgdb_GenerateShowtimes');
const genTheaters = require('../mongoSeeders/mgdb_GenerateTheaters');

let moviesJSON = genMovies();

// console.log(moviesJSON);

const insertMovies = (err, documents) => {
  if (err) {
    console.log('err inserting Movies', err);
  } else {
    console.log('these were inserted', documents)
  }
}

Movie.collection.insert(moviesJSON, insertMovies);



// Movie.insertMany(moviesJSON)
//   .then(movies => {
//     console.log('inserted movies', movies)
//   })
//   .catch(err => {
//     console.log('err inserting Movies', err);
//   })


//   const bulkImportToMongoDb = (moviesArray, model) => {
//     const batchSize = 100;
//     var batchCount = Math.ceil(moviesArray.length / batchSize);
//     var recordsRemaining = moviesArray.length;
//     var ops = [];
//     var counter = 0;
//     //loop over the batchCount
//     for(var i = 0; i < batchCount; i++) {
//       var batch = moviesArray.slice(counter, counter + batchSize);
//       counter += batchSize;
//       ops.push(model.insertMany(batch)) 
//     }
//     return Promise.all(ops);
//   }

// bulkImportToMongoDb(moviesJSON, Movie)