'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username : 'dipadana',
      password : '123456',
      position : 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username : 'eli',
      password : '123456',
      position : 'manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};