/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

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

module.exports = connect;
