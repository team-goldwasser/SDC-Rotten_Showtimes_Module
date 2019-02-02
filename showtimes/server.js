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

  const Movie = sequelize.define('movie', {
    title: {
      type: Sequelize.STRING,
      unique: true
    }
  })

  // Movie.create({
  //   title: 'Ironman IV'
  // })

  const Theater = sequelize.define('theater', {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    phone: Sequelize.STRING
  })

  // Theater.create({
  //   name: 'AMC Metreon 16',
  //   address: '135 4th Street Suite 3000',
  //   city: 'San Francisco',
  //   state: 'CA',
  //   zip: '94103',
  //   phone: '(415) 369-6207'
  // })

  const Showtime = sequelize.define('showtime', {
    week_day: Sequelize.STRING,
    start_time: Sequelize.STRING,
    class: Sequelize.STRING,
    theater_id: Sequelize.INTEGER,
    movie_id: Sequelize.INTEGER
  })

  // Showtime.create({
  //   week_day: 'Friday',
  //   start_time: '19:15',
  //   class: 'standard',
  //   theater_id: 3,
  //   movie_id: 1
  // })

  