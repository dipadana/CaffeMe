'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Checkout extends Model {}

  Checkout.init({
    CustomerId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    CustomerName: DataTypes.STRING,
    MenuName: DataTypes.STRING,
    price: DataTypes.STRING,
  }, {sequelize, modelName:'Checkout'});
  Checkout.associate = function(models) {
    // associations can be defined here
  };
  return Checkout;
};