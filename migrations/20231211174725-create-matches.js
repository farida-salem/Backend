'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stadium_id: {
        type: Sequelize.INTEGER
      },
      team_away: {
        type: Sequelize.INTEGER
      },
      team_home: {
        type: Sequelize.INTEGER
      },
      main_referee: {
        type: Sequelize.INTEGER
      },
      line_referee_right: {
        type: Sequelize.INTEGER
      },
      line_referee_left: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DATE
      },
      is_full: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  }
};