/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: String,
  grade1: Number,
  grade2: Number,
  grade3: Number,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
