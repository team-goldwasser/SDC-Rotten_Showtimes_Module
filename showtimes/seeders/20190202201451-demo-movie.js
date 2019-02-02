'use strict';

var genMovie = require('../utils/genMovie')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', genMovie(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
