const express = require("express");
const path = require("path");
const app = express();
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.get("/test", (req, res) => {
  res.send("test Hello");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

module.exports = app;
