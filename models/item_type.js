const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const itemType = sequelize.define("itemType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return itemType;
};
