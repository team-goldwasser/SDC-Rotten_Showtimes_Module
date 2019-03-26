'use strict';
module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    week_day: DataTypes.INTEGER,
    start_time: DataTypes.STRING,
    seat: DataTypes.STRING,
    theater_id: DataTypes.BIGINT,
    movie_id: DataTypes.BIGINT
  }, {});
  showtime.associate = function(models) {
    // associations can be defined here
  };
  return showtime;
};