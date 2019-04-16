const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  _id: {
    type: Number,
    unique: true
  },
  title: {
    type: String,
    unique: true,
  },
  title_url: {
    type: String,
    unique: true
  },
  tmdb_poster_path: String, 
  tmdb_backdrop_path: String
})

// 


module.exports = mongoose.model('movie', MovieSchema);