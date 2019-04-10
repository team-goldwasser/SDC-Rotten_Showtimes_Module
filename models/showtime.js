'use strict';

module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    week_day: DataTypes.INTEGER,
    start_time: DataTypes.STRING,
    seat: DataTypes.STRING,
    theater_id: {
      type: DataTypes.BIGINT,
      underscorded: true,
      references: {
        model: 'Theater', 
        key: 'ID'
      }
    },
    movie_id: {
      type: DataTypes.BIGINT,
      underscorded: true,
      references: {
        model: 'Movie',
        key: 'id'
      }
    },
  }, {
    indexes:[
      {
        foreignKey: true,
        fields: ['movie_id', 'theater_id']
      }
    ]
  });
  showtime.associate = (models) => {
    // associations can be defined here for Theater.hasMany(Showtime) Theater is the source and Showtime is target
    models.showtime.belongsTo(models.movie, {
      underscorded: true
    });
    models.movie.hasMany(models.showtime, {
      foreignKey: 'movie_id',
      sourceKey: 'id'
    });
    models.theater.hasMany(models.showtime, {
      foreignKey: 'theater_id',
      sourceKey: 'id'
    }); 
  };
  return showtime;
};