const mongoose = require('mongoose');
const ShowtimeSchema = require('./showtimes');
const MovieSchema = require('./movies');
const Schema = mongoose.Schema;

const TheaterSchema = new Schema({
  _id: {
    type: Number,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: String,
    unique: true
  },  
  address: String,
  city: {
    type: String,
    index: true
  },
  state: String,
  zip: {
    type: Number,
    index: true
  },  
  phone: String
  // showtimes: [ShowtimeSchema],
  // movie: [MovieSchema]
})

//virtual for get showtimes

//virtual for get movie



module.exports = mongoose.model('theater', TheaterSchema);