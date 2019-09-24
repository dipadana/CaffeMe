'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [{
      name : 'Dipadana',
      email: 'dipadana@gmail.com',
      phone: '6282144686462',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Angelina',
      email: 'dipadana@gmail.com',
      phone: '6282144686462',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Softy',
      email: 'dipadana@gmail.com',
      phone: '6282144686462',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name : 'Kanda',
      email: 'dipadana@gmail.com',
      phone: '6282144686462',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
