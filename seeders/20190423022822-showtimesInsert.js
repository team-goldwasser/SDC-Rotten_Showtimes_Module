let generateShowtime = require('../db/utils/genShowtime.js');

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('showtimes', generateShowtime(29000), {
    underscored: true
  }),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('showtimes', null, {}),
};
