const Sequelize = require("sequelize");
const { development } = require("./config");

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

const Organization = require("./models/organization")(sequelize);
const Zone = require("./models/zone")(sequelize);
const itemType = require("./models/item_type")(sequelize);
const Distance = require("./models/distance")(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

module.exports = {
  sequelize,
  Organization: Organization,
  Zone: Zone,
  itemType: itemType,
  Distance: Distance,
};
