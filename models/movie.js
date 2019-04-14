'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    title_url: {
      type: DataTypes.STRING,
      unique: true
    },
    tmdb_poster_path: DataTypes.STRING,
    tmdb_backdrop_path: DataTypes.STRING
  }, {});
  movie.associate = (models) => {
    models.movie.hasMany(models.showtime, {
      as: 'movie',
      foreignKey: 'movie_id',
      sourceKey: 'id'
    })
    // associations can be defined here
  };
  return movie;
};

