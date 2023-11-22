/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};