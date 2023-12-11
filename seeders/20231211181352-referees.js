'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Referees',[
      { "id": 1, "name": "Ahmed Hassan", "role": "Head Referee" },
      { "id": 2, "name": "Mohamed Ali", "role": "Assistant Referee" },
      { "id": 3, "name": "Amr Mahmoud", "role": "Head Referee" },
      { "id": 4, "name": "Sara Ibrahim", "role": "Assistant Referee" },
      { "id": 5, "name": "Hassan Omar", "role": "Head Referee" },
      { "id": 6, "name": "Fatma Ahmed", "role": "Assistant Referee" },
      { "id": 7, "name": "Mahmoud Samir", "role": "Head Referee" },
      { "id": 8, "name": "Youssef Reda", "role": "Assistant Referee" },
      { "id": 9, "name": "Nourhan Mohamed", "role": "Head Referee" },
      { "id": 10, "name": "Ali Abdelrahman", "role": "Assistant Referee" }
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
