'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stadium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stadium.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    googleMapLocation: DataTypes.STRING,
    seatingRows: DataTypes.INTEGER,
    seatingColumns: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stadium',
  });
  return Stadium;
};