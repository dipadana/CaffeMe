'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Customers',
          key : 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      MenuId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Menus',
          key : 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};