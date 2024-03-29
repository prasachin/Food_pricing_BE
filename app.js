const express = require("express");
const bodyParser = require("body-parser");
const priceRoutes = require("./controllers/pricing");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));

app.use("/api/pricing", priceRoutes);

module.exports = app;
