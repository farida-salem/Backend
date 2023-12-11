'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stadium', {
     
      name: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      googleMapLocation: {
        type: Sequelize.STRING(10000)
      },
      seatingRows: {
        type: Sequelize.INTEGER
      },
      seatingColumns: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stadium');
  }
};