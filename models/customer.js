'use strict';
module.exports = (sequelize, DataTypes) => {

  const phoneNumber = require('../helpers/phoneNumber');
  const Model = sequelize.Sequelize.Model;
  class Customer extends Model {}

  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (customer) => {
        console.log(customer)
        let tempPhone = phoneNumber(customer.dataValues.phone)
        customer.phone = tempPhone
    }
  },
    sequelize,modelName:'Customer'});

  Customer.associate = function(models) {
    Customer.belongsToMany(models.Menu, {through:models.Order});
  };
  
  return Customer;
}; 