const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  title: String,
  title_url: {
    type: String,
    unique: true
  },
  tmdb_poster_path: String, 
  tmdb_backdrop_path: String
})



module.exports = mongoose.model('Movie', movieSchema);