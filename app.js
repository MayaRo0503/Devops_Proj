const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.post("/Grade", (req, res) => {
  const { name, exam1, exam2, exam3 } = req.body;
  database.storeRegistration(name, exam1, exam2, exam3);
  res.sendStatus(200);
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
