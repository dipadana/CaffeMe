'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      CustomerId : 1,
      MenuId : 1,
      qty : 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      CustomerId : 1,
      MenuId : 2,
      qty : 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      CustomerId : 1,
      MenuId : 3,
      qty : 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      CustomerId : 1,
      MenuId : 4,
      qty : 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
