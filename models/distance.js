const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Distance = sequelize.define('Distance', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Distance;
};
