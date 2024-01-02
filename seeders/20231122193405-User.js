/* eslint-disable prettier/prettier */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users',[
        {
          "userName": "john_doe",
          "password": "P@ssw0rd1",
          "firstName": "John",
          "lastName": "Doe",
          "birthDate": "1990-03-15T00:00:00.000Z",
          "gender": "Male",
          "city": "New York",
          "address": "123 Main St",
          "email": "john@example.com",
          "role": "Fan"
        },
        {
          "userName": "alice_smith",
          "password": "SecurePass",
          "firstName": "Alice",
          "lastName": "Smith",
          "birthDate": "1988-09-22T00:00:00.000Z",
          "gender": "Female",
          "city": "Los Angeles",
          "address": "456 Elm St",
          "email": "alice@example.com",
          "role": "Manager",
          "status": "pending"
        },
        {
          "userName": "mike_jones",
          "password": "MyPass123",
          "firstName": "Mike",
          "lastName": "Jones",
          "birthDate": "1995-05-10T00:00:00.000Z",
          "gender": "Male",
          "city": "Chicago",
          "address": "789 Oak St",
          "email": "mike@example.com",
          "role": "Fan"
        },
        {
          "userName": "sara_wilson",
          "password": "SaraPass22",
          "firstName": "Sara",
          "lastName": "Wilson",
          "birthDate": "1992-11-30T00:00:00.000Z",
          "gender": "Female",
          "city": "Houston",
          "address": "101 Pine Ave",
          "email": "sara@example.com",
          "role": "Manager",
          "status": "pending"
        },
        {
          "userName": "david_thomas",
          "password": "D@vidPass",
          "firstName": "David",
          "lastName": "Thomas",
          "birthDate": "1987-08-18T00:00:00.000Z",
          "gender": "Male",
          "city": "Miami",
          "address": "222 Palm St",
          "email": "david@example.com",
          "role": "Manager",
          "status": "pending"
        }
      ])
  },

  async down (queryInterface, Sequelize) {

   
      await queryInterface.bulkDelete('Users', null, {});
     

  }
};
