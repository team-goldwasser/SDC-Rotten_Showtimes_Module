const generateMovie = require('../db/utils/genMovie.js');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('movies', generateMovie(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
