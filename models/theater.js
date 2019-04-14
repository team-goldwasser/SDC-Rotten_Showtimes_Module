'use strict';
module.exports = (sequelize, DataTypes) => {
  const theater = sequelize.define('theater', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING
  }, {
    indexes: [
         {
           name: 'zip_index',
           method: 'BTREE',
           fields: ['zip', {
             collate: 'en_US',
             order: 'DESC'
           }]
         }
    ]
  });
  theater.associate = (models) => {
    models.theater.hasMany(models.showtime, {
      as: 'theater',
      foreignKey: 'theater_id',
      sourceKey: 'id',
   });
  };
  return theater;
};
