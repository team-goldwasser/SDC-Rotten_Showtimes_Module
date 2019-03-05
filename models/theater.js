'use strict';
module.exports = (sequelize, DataTypes) => {
  const theater = sequelize.define('theater', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.BIGINT,
    phone: DataTypes.STRING
  }, {});
  theater.associate = function(models) {
    // associations can be defined here
  };
  return theater;
};