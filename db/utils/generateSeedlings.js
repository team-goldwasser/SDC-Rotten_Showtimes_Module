const generateTheaters = require('./genTheater');
const generateShowtimes = require('./genShowtime');
const generateMovies = require('./genMovie');
const movies = require('../sample/movies.csv');
const path = require('path');




//create a csv file for seeding db with theaters



//create a csv file for seeding db with showtimes



// "npm [run script] seed": "node_modules/.bin/sequelize db:seed:all  --debug"

//used this for creating seed file   // "seed": "node_modules/.bin/sequelize seed:generate --name='theatersInsert4' --debug"


// "seed-all": "node_modules/.bin/sequelize db:seed:all --debug"

// ALTER TABLE 
// ADD PRIMARY KEY(product_no);
//ADD FORIEGN KEY CONSTRAINT 

// ALTER TABLE table_name ADD CONSTRAINT constraint_name constraint_definition