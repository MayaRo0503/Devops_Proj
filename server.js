const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const gradesRouter = require("./routes/grades");

const uri =
  "mongodb+srv://Maya:260173Ma@devopsproject.kgl8tzh.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

// Uncomment the following lines if you want to log "Connected to MongoDB"
// connect().then(() => {
//   console.log("Connected to MongoDB");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/grades", gradesRouter);

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

module.exports = { app, connect };
