// create table migration for reservation : columns : matchid, userid, reservedRow, reservedCol
/* eslint-disable prettier/prettier */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservation', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        userid: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
            model: 'Users',
            key: 'id'
            }
        },
        matchid: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
            model: 'Matches',
            key: 'id'
            }
        },
        reservedRow: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        reservedCol: {
            allowNull: false,
            type: Sequelize.INTEGER
        }

      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservation');
  }
};