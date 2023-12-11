'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matches.init({
    stadium_id: DataTypes.INTEGER,
    team_away: DataTypes.INTEGER,
    team_home: DataTypes.INTEGER,
    main_referee: DataTypes.INTEGER,
    line_referee_right: DataTypes.INTEGER,
    line_referee_left: DataTypes.INTEGER,
    time: DataTypes.DATE,
    is_full: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Matches',
  });
  return Matches;
};