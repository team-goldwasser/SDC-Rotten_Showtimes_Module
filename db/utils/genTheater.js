// const sample = {
//   name: 'AMC Metreon 16',
//   address: '135 4th Street Suite 3000',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94103',
//   phone: '(415) 369-6207'
// }


const faker = require('faker/locale/en_CA');

const words = require('../sample/cinemas');
const locationTitles = ['Pictures', 'Shows', 'Cinema', 'Cinemas', 'Studios', 'Theater', 'Theaters', 'Theatre', 'Theatres'];
const cinemaPrefix = ["AMC", "UA", "Century", "AMC at the", "ArcLight", "Pacific", "NewMark", "Landmark", "Regal"];

const wordsLastIndex = words.length - 1;
const locationTitlesLastIndex = locationTitles.length - 1;
const cinemaPrefixLastIndex = cinemaPrefix.length - 1;

const getRandomIndex = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const getRandomAmount = (min, max) => {
  return Math.floor((Math.random() * (min, max + 1)) + min);
}

const generateTheaters = (count) => {
  var results = [];

  while (count > 0) {
    const theater = {};
    theater.name = cinemaPrefix[getRandomIndex(0, cinemaPrefixLastIndex)] + ' ' + faker.address.streetName() + ' ' + locationTitles[getRandomIndex(0, locationTitlesLastIndex)];
    theater.address = faker.address.streetAddress();
    theater.city = faker.address.city();
    theater.state = 'CA';
    theater.zip = getRandomAmount(90001, 96160);
    theater.phone = faker.phone.phoneNumberFormat();
    results.push(theater);
    count--;
  }

  return results;
};


module.exports = generateTheaters;

// const sample = {
//   name: 'AMC Metreon 16',
//   address: '135 4th Street Suite 3000',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94103',
//   phone: '(415) 369-6207'
// }

// const ipsum = 'Lorem Ipsum Dolor Amet Tumblr Authentic Bespoke Helvetica Seitan Listicle Gluten-free Fashion Axe Bicycle Rights In Pariatur Marfa Esse 3 Wolf Moon Waistcoat Craft Beer Hexagon Bicycle Rights Squid Palo Santo PBR&B Shaman Vexillologist Leggings Kickstarter Wayfarers Ramps Portland Direct Trade Flannel Blue Bottle Brunch Locavore Tattooed Synth Minim Gastropub Subway Tile Lorem Church-key Listicle Celiac Lyft Paleo Elit Aliquip Cornhole';
// const zipMax = 94102;
// const zipMin = 94164;
// const stateAbbr = 'CA';
// const nameLength = 15;
// const theaterPrefix = ['AMC ', 'Century ', ''];
// const addressLength = 20;
// const cityLength = 12;

// const randomIndex = array => Math.floor(Math.random() * array.length);

// const generateText = (length) => {
//   const start = Math.floor(Math.random() * (ipsum.length - length));
//   const text = ipsum.slice(start, start + length).trim();
//   return text.charAt(0).toUpperCase() + text.slice(1);
// };

// const generateZip = () => Math.floor(Math.random() * (zipMax - zipMin) + zipMin).toString();

// const generatePhone = () => {
//   const three = Math.floor(Math.random() * (999 - 100 + 1) + 100);
//   const four = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
//   return `(${three.toString()}) ${three.toString()}-${four.toString()}`;
// };

// const generateTheaters = (count) => {
//   const results = [];

//   while (count > 0) {
//     const theater = {};
//     theater.name = theaterPrefix[randomIndex(theaterPrefix)].concat(generateText(nameLength));
//     theater.address = `${Math.floor(Math.random() * 999).toString()} ${generateText(addressLength)}`;
//     theater.city = generateText(cityLength);
//     theater.state = stateAbbr;
//     theater.zip = generateZip();
//     theater.phone = generatePhone();
//     results.push(theater);
//     count--;
//   }

//   return results;
// };

// module.exports = generateTheaters;