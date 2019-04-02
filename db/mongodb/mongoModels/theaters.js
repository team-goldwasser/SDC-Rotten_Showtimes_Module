const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theaterSchema = new Schema({
  id: {
    type: Number,
    autoIncrement: true
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
})

//Virtual for getting theaters full address/details in string
Theater.virtual('address').get(function() {
  return `${this.name}, ${this.address}, ${this.city}, ${this.state} ${this.zip}`
})

//virtual for getting theaters list of showtimes




module.exports = mongoose.model('Theater', theaterSchema);