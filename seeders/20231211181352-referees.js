'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Referees',[
      {"name": "Ahmed Hassan", "role": "Head Referee" },
      {"name": "Mohamed Ali", "role": "Assistant Referee" },
      {"name": "Amr Mahmoud", "role": "Head Referee" },
      {"name": "Sara Ibrahim", "role": "Assistant Referee" },
      {"name": "Hassan Omar", "role": "Head Referee" },
      {"name": "Fatma Ahmed", "role": "Assistant Referee" },
      {"name": "Mahmoud Samir", "role": "Head Referee" },
      {"name": "Youssef Reda", "role": "Assistant Referee" },
      {"name": "Nourhan Mohamed", "role": "Head Referee" },
      { "name": "Ali Abdelrahman", "role": "Assistant Referee" }
    ])
      {}
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
