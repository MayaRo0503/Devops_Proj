/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();
const Grade = require("../models/Grade");

// POST /grades - Save grades to the database
router.post("/", async (req, res) => {
  try {
    const { fullName, grade1, grade2, grade3 } = req.body;
    const grade = new Grade({
      fullName,
      grade1,
      grade2,
      grade3,
    });
    const savedGrade = await grade.save();
    res.status(201).send(savedGrade);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error occurred while saving grades" });
  }
});

// GET /grades - Retrieve all students
router.get("/", async (req, res) => {
  try {
    const students = await Grade.find();
    res.status(200).send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error occurred while fetching students" });
  }
});

module.exports = router;
