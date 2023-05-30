/*const express = require("express");
const router = express.Router();
const Grade = require("../models/Grade");

// POST /grades - Save grades to the database
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const { fullName, grade1, grade2, grade3 } = req.body;

    // Create a new Grade document
    const grade = new Grade({
      fullName,
      grade1,
      grade2,
      grade3,
    });

    // Save the grade document to the database
    const savedGrade = await grade.save();

    res.status(201).send(savedGrade);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error occurred while saving grades" });
  }
});

module.exports = router;
*/
