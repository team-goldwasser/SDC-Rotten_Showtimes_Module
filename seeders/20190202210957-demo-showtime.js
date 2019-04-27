'use strict';

let generateShowtime = require('../db/utils/genShowtime.js');

module.exports = {
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('showtimes', generateShowtime(1), {
    underscored: true
  }),
=======
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('showtimes', generateShowtime(1), { underscored: true }),
>>>>>>> 3b7d9944b88e52ce45a4f6769c53f46f3e2621f0

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('showtimes', null, {}),
};
