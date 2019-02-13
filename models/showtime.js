'use strict';
module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    week_day: DataTypes.INTEGER,
    start_time: DataTypes.STRING,
    seat: DataTypes.STRING,
    theater_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {timestamps: false});
  showtime.associate = function(models) {
    // associations can be defined here
  };
  return showtime;
};