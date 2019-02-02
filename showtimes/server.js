const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const port = 9002;

app.listen(port);

const sequelize = new Sequelize({
  database: 'rottentomatoes',
  username: 'Chen',
  password: null,
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  define: { timestamps: false }
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  })

