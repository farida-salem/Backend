'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      stadium_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stadium',
          key: 'id'
        }

      },
      team_away: {
        allowNull: false,
        references: {
          model: 'Team',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      team_home: {
        allowNull: false,
        references: {
          model: 'Team',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      team_away_logo: {
        allowNull: true,
        references: {
          model: 'Team',
          key: 'logo'
        },
        type: Sequelize.STRING
      },
      team_home_logo: {
        allowNull: true,
        references: {
          model: 'Team',
          key: 'logo'
        },
        type: Sequelize.STRING
      },
      main_referee: {
        allowNull: false,
        references: {
          model: 'Referees',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      line_referee_right: {
        allowNull: false,
        references: {
          model: 'Referees',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      line_referee_left: {
        allowNull: false,
        references: {
          model: 'Referees',
          key: 'id'
        },
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