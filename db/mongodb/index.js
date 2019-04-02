const mongoose = require('mongoose');
require('dotenv').config();
var mongodB_URI = 'mongodb://127.0.0.1/rottentomatoes';

mongoose.connect(mongodB_URI, {
  useNewUrlParser: true,
  autoIndex: false,
    // socketTimeoutMS: 0,
    //   keepAlive: true,
    //   reconnectTries: 30
})


const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error connection to the database...')
);
db.once('open', function () {
  console.log('Successfully connected to the database');
});


module.exports = db;


