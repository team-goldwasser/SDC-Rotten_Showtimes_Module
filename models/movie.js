'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    title: DataTypes.STRING,
    title_url: {
      type: DataTypes.STRING,
      unique: true
    },
    tmdb_poster_path: DataTypes.STRING,
    tmdb_backdrop_path: DataTypes.STRING
  }, {});
  movie.associate = (models) => {
    // movie.hasMany(models.Showtime, { foreignKey: 'movie_id' })
    // associations can be defined here
  };
  return movie;
};

