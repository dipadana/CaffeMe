'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Menu extends Model {}

  Menu.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {sequelize, modelName:'Menu'});
  Menu.associate = function(models) {
    Menu.belongsToMany(models.Customer, {through:models.Order});
  };
  return Menu;
};