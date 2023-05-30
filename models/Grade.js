const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const gradeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  grade1: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  grade2: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  grade3: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;
