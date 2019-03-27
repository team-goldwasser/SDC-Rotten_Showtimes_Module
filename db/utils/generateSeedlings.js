const generateTheaters = require('./genTheater');
const generateShowtimes = require('./genShowtime');
const generateMovies = require('./genMovie');
const movies = require('../sample/movies.csv');
const path = require('path');
// psql - h localhost - d rottentomatoes - U eric - p 5432 - 
//a - q - f / home / jobs / Desktop / resources / postgresql.sql

`\i './db/schema.sql'`;

// "npm [run script] seed": "node_modules/.bin/sequelize db:seed:all  --debug"

//used this for creating seed file   // "seed": "node_modules/.bin/sequelize seed:generate --name='theatersInsert4' --debug"


// ,
// "seederStorage": "json",
// "seederStoragePath": "sequelizeData.json",
// "seederStorageTableName": "sequelize_data"



// begin;


// COPY movies(title, title_url, tmbd_poster_path, tmbd_backdrop_path) FROM '/Users/macbook/Documents/HRPT11/SDC-Rotten_Showtimes_Module/db/sample/movies.csv' DELIMITER ',' CSV HEADER;

//create insert invoke generateTheaters(5000)


// ALTER TABLE 
// ADD PRIMARY KEY(product_no);
