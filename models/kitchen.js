'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kitchen = sequelize.define('Kitchen', {
    qty: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER
  }, {});
  Kitchen.associate = function(models) {
    // associations can be defined here
  };
  return Kitchen;
};