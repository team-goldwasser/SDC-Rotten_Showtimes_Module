'use strict';
module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    week_day: DataTypes.STRING,
    start_time: DataTypes.STRING,
    class: DataTypes.STRING,
    theater_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  showtime.associate = function(models) {
    // associations can be defined here
  };
  return showtime;
};