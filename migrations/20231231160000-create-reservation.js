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
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
        userid: {
            allowNull: false,
            type: Sequelize.STRING,
            references: {
            model: 'Users',
            key: 'userName'
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
        seatid: {
            allowNull: true,
            type: Sequelize.STRING
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservation');
  }
};