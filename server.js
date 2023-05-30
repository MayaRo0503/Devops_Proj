const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const gradesRouter = require("./routes/grades");
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

const uri =
  "mongodb+srv://Maya:260173Ma@devopsproject.kgl8tzh.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
app.use("/grades", gradesRouter);
/*
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/test", (req, res) => {
  res.send("test Hello");
});
*/
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

module.exports = app;
