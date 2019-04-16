const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShowtimeSchema = new Schema({
  _id: {
    type: Number,
    autoIncrement: true,
    unique: true
  },
  week_day: Number,
  start_time: String,
  seat: String,
  theater_id: {
    type: Number,
    required: true,
    ref: 'theater'
  },
  movie_id: {
    type: Number,
    required: true,
    ref: 'movie'
  }
})

module.exports = mongoose.model('showtime', ShowtimeSchema);