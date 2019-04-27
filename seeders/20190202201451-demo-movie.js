'use strict';

const generateMovie = require('../db/utils/genMovie.js');

module.exports = {
<<<<<<< HEAD
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', generateMovie(), {})
  },
=======
<<<<<<< seeding_ec2_postgres
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('movies', generateMovie(), {}),
>>>>>>> 3b7d9944b88e52ce45a4f6769c53f46f3e2621f0

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
=======
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('movies', generateMovie(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
>>>>>>> master
