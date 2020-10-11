const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/v1/filaments/", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "SUCCESS",
  });
});

app.use("/api/v1/filaments/", (req, res, next) => {
  const filaments = [
    {
      id: "Inland_PLA_Blue",
      brand: "Inland",
      type: "PLA",
      color: "Blue",
      printTemp: 215,
      weight: 1000,
      diameter: 1.75,
      jobs: [],
      remainingMaterial: 1000,
    },
    {
      id: "Inland_PLA+_Red",
      brand: "Inland",
      type: "PLA+",
      color: "Red",
      printTemp: 215,
      weight: 1000,
      diameter: 1.75,
      jobs: [],
      remainingMaterial: 1000,
    },
  ];
  res.status(200).json({
    message: "SUCCESS",
    filaments: filaments,
  });
});

module.exports = app;
