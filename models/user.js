/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: {type: DataTypes.STRING,
    unique:true},
    password: {type:DataTypes.STRING,
    allowNull:false},
    firstName:{type:DataTypes.STRING,
      allowNull:false},
    lastName: {type:DataTypes.STRING,
      allowNull:false},
    birthDate: {type:DataTypes.DATE,
      allowNull:false},
    gender: {type:DataTypes.STRING,
      allowNull:false},
    city: {type:DataTypes.STRING,
      allowNull:false},
    address: {type:DataTypes.STRING,
      allowNull:true},
    email: {type:DataTypes.STRING,
      allowNull:false},
    role: {type:DataTypes.STRING,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};