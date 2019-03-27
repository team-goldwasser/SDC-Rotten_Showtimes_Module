'use strict';

var generateTheaters = require('../db/utils/genTheater.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('theaters', generateTheaters(10000), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('theaters', null, {});
  }
};
