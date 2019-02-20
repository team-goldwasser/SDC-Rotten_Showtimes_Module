module.exports = (sequelize, DataTypes) => {
  const Theater = sequelize.define('theater', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.BIGINT,
    phone: DataTypes.STRING,
  }, { timestamps: false });
  Theater.associate = function (models) {
    // associations can be defined here
  };
  return Theater;
};
