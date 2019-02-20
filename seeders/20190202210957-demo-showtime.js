'use strict';

var generateShowtime = require('../db/utils/genShowtime')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('showtimes', generateShowtime(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('showtimes', null, {});
  }
};