'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name : 'Pizza',
      price:10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Burger',
      price:15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Cake',
      price:20000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Milk',
      price:12000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
