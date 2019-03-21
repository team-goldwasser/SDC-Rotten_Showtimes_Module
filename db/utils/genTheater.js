// const sample = {
//   name: 'AMC Metreon 16',
//   address: '135 4th Street Suite 3000',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94103',
//   phone: '(415) 369-6207'
// }


const faker = require('faker/locale/en_CA');


const locationTitles = ['Pictures', 'Shows', 'Cinema', 'Cinemas', 'Studios', 'Theater', 'Theaters', 'Theatre', 'Theatres'];
const cinemaPrefix = ["AMC", "UA", "Century", "AMC at the", "ArcLight", "Pacific", "NewMark", "Landmark", "Regal"];

const locationTitlesLastIndex = locationTitles.length - 1;
const cinemaPrefixLastIndex = cinemaPrefix.length - 1;

const getRandomIndex = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const getRandomZip = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1) + min));
}

const generateTheaters = (count) => {
  var results = [];

  while (count > 0) {
    const theater = {};
    theater.name = cinemaPrefix[getRandomIndex(0, cinemaPrefixLastIndex)] + ' ' + faker.address.streetName() + ' ' + locationTitles[getRandomIndex(0, locationTitlesLastIndex)];
    theater.address = faker.address.streetAddress();
    theater.city = faker.address.city();
    theater.state = 'CA';
    theater.zip = getRandomZip(90001, 96160);
    theater.phone = faker.phone.phoneNumberFormat();
    results.push(theater);
    count--;
  }

  return results;
};


module.exports = generateTheaters;