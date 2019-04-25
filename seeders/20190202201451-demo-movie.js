const generateMovie = require('../db/utils/genMovie.js');

module.exports = {
<<<<<<< seeding_ec2_postgres
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('movies', generateMovie(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
=======
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('movies', generateMovie(), {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('movies', null, {}),
};
>>>>>>> master
