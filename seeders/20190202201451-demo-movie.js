const generateMovie = require('../db/utils/genMovie.js');

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('movies', generateMovie(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
