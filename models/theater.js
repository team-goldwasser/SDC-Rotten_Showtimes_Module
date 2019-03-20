'use strict';
module.exports = (sequelize, DataTypes) => {
  const theater = sequelize.define('theater', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    screens: DataTypes.STRING 
  }, {});
  theater.associate = function(models) {
    // associations can be defined here
  };
  return theater;
};