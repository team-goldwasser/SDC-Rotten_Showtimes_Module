'use strict';
module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    week_day: DataTypes.INTEGER,
    start_time: DataTypes.STRING,
    seat: DataTypes.STRING,
    theater_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Theater', 
        key: 'ID'
      }
    },
    movie_id: {
      type: DataTypes.BIGINT,
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
    // showtime.belongsTo(models.Theater, { foreignKey: 'ID' }),
    // showtime.belongsTo(models.Movie, { foreignKey: 'id' })
  };
  return showtime;
};