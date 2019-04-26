require('dotenv').config();

const fs = require('fs');

module.exports = {
  development:{
    username: process.env.PGDB_USERNAME,
    password: process.env.PGDB_PASSWORD,
    database: "rottentomatoes",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
  test: {
    username: process.env.PGDB_USERNAME,
    password: process.env.PGDB_PASSWORD,
    database: "rottentomatoes",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
  production: {
      username: process.env.PGDB_USERNAME,
      password: process.env.PGDB_PASSWORD,
      database: "rottentomatoes",
      host: process.env.PGDB_HOST,
      dialect: "postgres",
      define: {
        timestamps: false
      }
  }
}
