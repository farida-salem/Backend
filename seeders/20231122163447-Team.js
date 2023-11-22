/* eslint-disable prettier/prettier */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Team', [
      {
        "id": 1,
        "name": "Al Ahly SC",
        "logo": "https://example.com/al_ahly_logo.png"
      },
      {
        "id": 2,
        "name": "Zamalek SC",
        "logo": "https://example.com/zamalek_logo.png"
      },
      {
        "id": 3,
        "name": "Ismaily SC",
        "logo": "https://example.com/ismaily_logo.png"
      },
      {
        "id": 4,
        "name": "Al Masry SC",
        "logo": "https://example.com/al_masry_logo.png"
      },
      {
        "id": 5,
        "name": "Pyramids FC",
        "logo": "https://example.com/pyramids_logo.png"
      },
      {
        "id": 6,
        "name": "El Mokawloon SC",
        "logo": "https://example.com/el_mokawloon_logo.png"
      },
      {
        "id": 7,
        "name": "ENPPI SC",
        "logo": "https://example.com/enppi_logo.png"
      },
      {
        "id": 8,
        "name": "Tala'ea El Gaish SC",
        "logo": "https://example.com/talaea_el_gaish_logo.png"
      },
      {
        "id": 9,
        "name": "Wadi Degla SC",
        "logo": "https://example.com/wadi_degla_logo.png"
      },
      {
        "id": 10,
        "name": "Al Ittihad Alexandria Club",
        "logo": "https://example.com/al_ittihad_logo.png"
      },
      {
        "id": 11,
        "name": "Ismaily SC",
        "logo": "https://example.com/ismaily_logo.png"
      },
      {
        "id": 12,
        "name": "Smouha SC",
        "logo": "https://example.com/smouha_logo.png"
      },
      {
        "id": 13,
        "name": "Misr Lel-Makkasa SC",
        "logo": "https://example.com/misr_lel_makkasa_logo.png"
      },
      {
        "id": 14,
        "name": "El Entag El Harby SC",
        "logo": "https://example.com/el_entag_el_harby_logo.png"
      },
      {
        "id": 15,
        "name": "Aswan SC",
        "logo": "https://example.com/aswan_logo.png"
      },
      {
        "id": 16,
        "name": "Ceramica Cleopatra FC",
        "logo": "https://example.com/ceramica_cleopatra_logo.png"
      },
      {
        "id": 17,
        "name": "Gouna FC",
        "logo": "https://example.com/gouna_logo.png"
      },
      {
        "id": 18,
        "name": "National Bank of Egypt SC",
        "logo": "https://example.com/national_bank_of_egypt_logo.png"
      }
    ]);
  },
 

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Team', null, {});
  }
};
