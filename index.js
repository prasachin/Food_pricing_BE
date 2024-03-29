const app = require("./app");

const PORT = process.env.PORT || 3005;

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

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
