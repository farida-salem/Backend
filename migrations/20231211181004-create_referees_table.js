'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Referees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Referees');
  }
};
