

let generateShowtime = require('../db/utils/genShowtime.js');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('showtimes', generateShowtime(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('showtimes', null, {}),
};
