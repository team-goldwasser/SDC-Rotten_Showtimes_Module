'use strict';

var generateTheaters = require('../db/utils/genTheater.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('theaters', generateTheaters(5), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('theaters', null, {});
  }
};
