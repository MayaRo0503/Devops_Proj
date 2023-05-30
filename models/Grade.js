/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

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
