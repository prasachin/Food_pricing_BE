const app = require("./app");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, "build")));

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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
