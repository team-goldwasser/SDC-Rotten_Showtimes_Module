'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    title_url: DataTypes.STRING,
    tmdb_poster_path: DataTypes.STRING,
    tmdb_backdrop_path: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};