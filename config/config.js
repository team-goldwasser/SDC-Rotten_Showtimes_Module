

require('dotenv').config();

const fs = require('fs');

module.exports = {
  development: {
    username: process.env.PGDB_USERNAME,
    password: process.env.PGDB_PASSWORD,
    database: "rottentomatoes",
    host: "ec2-35-167-61-182.us-west-2.compute.amazonaws.com",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
  test: {
    username: process.env.PGDB_USERNAME,
    password: process.env.PGDB_PASSWORD,
    database: "rottentomatoes",
    host: "ec2-35-167-61-182.us-west-2.compute.amazonaws.com",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  },
  production: {
    username: process.env.PGDB_USERNAME,
    password: process.env.PGDB_PASSWORD,
    database: "rottentomatoes",
    host: "ec2-35-167-61-182.us-west-2.compute.amazonaws.com",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
}


