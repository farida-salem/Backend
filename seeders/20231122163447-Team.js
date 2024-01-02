/* eslint-disable prettier/prettier */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Team', [
      {
        "id": 1,
        "name": "Al Ahly SC",
        "logo": "https://pbs.twimg.com/profile_images/1706360434620559360/ThDmyFsc_400x400.jpg"
      },
      {
        "id": 2,
        "name": "Zamalek SC",
        "logo": "https://pbs.twimg.com/profile_images/965612259971076097/h6oX8aow_400x400.jpg"
      },
      {
        "id": 3,
        "name": "Ismaily SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Ismaily-SC.gif?resize=379%2C380&ssl=1"
      },
      {
        "id": 4,
        "name": "Al Masry SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2020/01/Al-Masry-Club.gif?resize=379%2C380&ssl=1"
      },
      {
        "id": 5,
        "name": "Pyramids FC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Pyramids-FC.png?w=200&ssl=1"
      },
      {
        "id": 6,
        "name": "El Mokawloon SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Al-Mokawloon-Al-Arab.png?w=200&ssl=1"
      },
      {
        "id": 7,
        "name": "ENPPI SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/ENPPI-Club.gif?resize=347%2C380&ssl=1"
      },
      {
        "id": 8,
        "name": "Tala'ea El Gaish SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Talaea-El-Gaish-SC.gif?resize=319%2C380&ssl=1"
      },
      {
        "id": 9,
        "name": "Wadi Degla SC",
        "logo": "https://i.pinimg.com/564x/37/b4/20/37b42033a004cd7aaef67a617c190da9.jpg"
      },
      {
        "id": 10,
        "name": "Al Ittihad Alexandria Club",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2022/09/Al-Ittihad-Alexandria-Club.gif?resize=253%2C380&ssl=1"
      },
      {
        "id": 12,
        "name": "Smouha SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Smouha-Club.gif?resize=357%2C380&ssl=1"
      },
      {
        "id": 13,
        "name": "Misr Lel-Makkasa SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Baladiya-Al-Mahalla-SC.png?w=200&ssl=1"
      },
      {
        "id": 14,
        "name": "Future FC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/Future-FC.png?w=200&ssl=1"
      },
      {
        "id": 15,
        "name": "Al Dakhleya SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2022/09/Al-Dakhleya-SC.png?w=200&ssl=1"
      },
      {
        "id": 16,
        "name": "Ceramica Cleopatra FC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2022/09/Cleapatra-FC.png?w=200&ssl=1"
      },
      {
        "id": 17,
        "name": "Gouna FC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/El-Gouna-FC.png?w=200&ssl=1"
      },
      {
        "id": 18,
        "name": "National Bank of Egypt SC",
        "logo": "https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2023/11/National-Bank-of-Egypt-Club.png?w=200&ssl=1"
      }
    ]);
  },
 

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Team', null, {});
  }
};
