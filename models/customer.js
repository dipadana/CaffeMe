'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Customer extends Model {}

  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {sequelize,modelName:'Customer'});
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Menu, {through:models.Order});
  };
  return Customer;
}; 