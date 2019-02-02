'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};