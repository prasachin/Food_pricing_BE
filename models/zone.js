const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Zone = sequelize.define('Zone', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Zone;
};
