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



// ALTER TABLE 
// ADD PRIMARY KEY(product_no);
//ADD FORIEGN KEY CONSTRAINT 