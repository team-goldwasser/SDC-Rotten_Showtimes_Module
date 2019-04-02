const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const showtimeSchema = new Schema({
  id: {
    type: Number,
    autoIncrement: true
  },
  week_day: Number,
  start_time: String,
  seat: String,
  theater_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Theater'
  },
  movie_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Movie'
  }
})

module.exports = mongoose.model('Showtime', showtimeSchema);