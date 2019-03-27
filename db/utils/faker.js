// const faker = require('faker');

// const words = require('../sample/cinemas');
// const locationTitles = ['Pictures', 'Shows', 'Cinema', 'Cinemas', 'Studios', 'Theater', 'Theaters', 'Theatre', 'Theatres'];
// const cinemaPrefix = ["AMC", "UA", "Century", "AMC at the", "ArcLight", "Pacific", "NewMark", "Landmark", "Regal"];

// const wordsLastIndex = words.length - 1;
// const locationTitlesLastIndex = locationTitles.length - 1;
// const cinemaPrefixLastIndex = cinemaPrefix.length - 1;

// const getRandomIndex = (min, max) => {
//   return Math.floor((Math.random() * (max - min + 1)) + min);
// }




// const generateTheaters = (count) => {
//   var results = [];

//   while(count > 0) {
//     const theater = {};
//     theater.name = cinemaPrefix[getRandomIndex(0, cinemaPrefixLastIndex)] + ' ' + faker.address.streetName() + ' ' + locationTitles[getRandomIndex(0, locationTitlesLastIndex)];
//     theater.address = faker.address.streetAddress();
//     theater.city = faker.address.city();
//     theater.state = "CA";
//     theater.zip = faker.address.zipCode()
//     theater.phone = faker.phone.phoneNumberFormat();
//     results.push(theater);
//     count--;
//   }

//   return results;
// };

// console.log(generateTheaters(5));
  const getRandomZip = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min));
  }

console.log(getRandomZip(90001, 96160));