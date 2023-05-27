const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const axios = require("axios");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.post("/register", (req, res) => {
  const { name, exam1, exam2, exam3 } = req.body;
  // Assuming you have a function in database.js to store the data
  database.storeRegistration(name, exam1, exam2, exam3);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
