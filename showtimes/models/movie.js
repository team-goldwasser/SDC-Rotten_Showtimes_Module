'use strict';

module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    tmdb_id: DataTypes.STRING,
    title: DataTypes.STRING,
    title_url: DataTypes.STRING,
    tmdb_poster_path: DataTypes.STRING,
    tmdb_backdrop_path: DataTypes.STRING
  }, {timestamps: false});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};