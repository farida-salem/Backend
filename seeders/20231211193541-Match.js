'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Matches',[
      {
        "id": 3,
        "stadium_id": 3,
        "team_away": 6,
        "team_home": 7,
        "main_referee": 3,
        "line_referee_right": 4,
        "line_referee_left": 5,
        "time": "2023-12-14T15:30:00Z",
        "is_full": false
      },
      {
        "id": 4,
        "stadium_id": 4,
        "team_away": 8,
        "team_home": 9,
        "main_referee": 4,
        "line_referee_right": 5,
        "line_referee_left": 6,
        "time": "2023-12-15T18:00:00Z",
        "is_full": false
      },
      {
        "id": 5,
        "stadium_id": 3,
        "team_away": 10,
        "team_home": 11,
        "main_referee": 5,
        "line_referee_right": 6,
        "line_referee_left": 7,
        "time": "2023-12-16T14:45:00Z",
        "is_full": false
      },
      {
        "id": 6,
        "stadium_id": 2,
        "team_away": 12,
        "team_home": 13,
        "main_referee": 6,
        "line_referee_right": 7,
        "line_referee_left": 8,
        "time": "2023-12-17T17:20:00Z",
        "is_full": false
      },
      {
        "id": 7,
        "stadium_id": 1,
        "team_away": 14,
        "team_home": 15,
        "main_referee": 7,
        "line_referee_right": 8,
        "line_referee_left": 9,
        "time": "2023-12-18T16:10:00Z",
        "is_full": false
      },
      {
        "id": 8,
        "stadium_id": 2,
        "team_away": 16,
        "team_home": 17,
        "main_referee": 8,
        "line_referee_right": 9,
        "line_referee_left": 10,
        "time": "2023-12-19T19:30:00Z",
        "is_full": false
      },
      {
        "id": 9,
        "stadium_id": 3,
        "team_away": 18,
        "team_home": 1,
        "main_referee": 9,
        "line_referee_right": 10,
        "line_referee_left": 1,
        "time": "2023-12-20T14:55:00Z",
        "is_full": false
      },
      {
        "id": 10,
        "stadium_id": 1,
        "team_away": 2,
        "team_home": 3,
        "main_referee": 1,
        "line_referee_right": 2,
        "line_referee_left": 3,
        "time": "2023-12-21T16:40:00Z",
        "is_full": false
      },
      {
        "id": 11,
        "stadium_id": 1,
        "team_away": 4,
        "team_home": 5,
        "main_referee": 2,
        "line_referee_right": 3,
        "line_referee_left": 4,
        "time": "2023-12-22T18:20:00Z",
        "is_full": false
      },
      {
        "id": 12,
        "stadium_id": 2,
        "team_away": 6,
        "team_home": 7,
        "main_referee": 3,
        "line_referee_right": 4,
        "line_referee_left": 5,
        "time": "2023-12-23T15:00:00Z",
        "is_full": false
      },
      {
        "id": 13,
        "stadium_id": 3,
        "team_away": 8,
        "team_home": 9,
        "main_referee": 4,
        "line_referee_right": 5,
        "line_referee_left": 6,
        "time": "2023-12-24T17:45:00Z",
        "is_full": false
      },
      {
        "id": 14,
        "stadium_id": 3,
        "team_away": 10,
        "team_home": 11,
        "main_referee": 5,
        "line_referee_right": 6,
        "line_referee_left": 7,
        "time": "2023-12-25T14:30:00Z",
        "is_full": false
      },
      {
        "id": 15,
        "stadium_id": 4,
        "team_away": 12,
        "team_home": 13,
        "main_referee": 6,
        "line_referee_right": 7,
        "line_referee_left": 8,
        "time": "2023-12-26T16:15:00Z",
        "is_full": false
      },
      {
        "id": 16,
        "stadium_id": 4,
        "team_away": 14,
        "team_home": 15,
        "main_referee": 7,
        "line_referee_right": 8,
        "line_referee_left": 9,
        "time": "2023-12-27T19:00:00Z",
        "is_full": false
      },
      {
        "id": 17,
        "stadium_id": 2,
        "team_away": 16,
        "team_home": 17,
        "main_referee": 8,
        "line_referee_right": 9,
        "line_referee_left": 10,
        "time": "2023-12-28T14:50:00Z",
        "is_full": false
      },
      {
        "id": 18,
        "stadium_id": 1,
        "team_away": 18,
        "team_home": 1,
        "main_referee": 9,
        "line_referee_right": 10,
        "line_referee_left": 3,
        "time": "2023-12-29T17:30:00Z",
        "is_full": false
      },
      {
        "id": 19,
        "stadium_id": 1,
        "team_away": 2,
        "team_home": 3,
        "main_referee": 1,
        "line_referee_right": 2,
        "line_referee_left": 3,
        "time": "2023-12-30T15:20:00Z",
        "is_full": false
      },
      {
        "id": 20,
        "stadium_id": 2,
        "team_away": 4,
        "team_home": 5,
        "main_referee": 2,
        "line_referee_right": 3,
        "line_referee_left": 4,
        "time": "2023-12-31T18:10:00Z",
        "is_full": false
      }
    ]
    )
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
