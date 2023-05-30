/* eslint-disable @typescript-eslint/no-var-requires */
const Grade = require("../models/Grade");

const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find({}, "fullName grade1 grade2 grade3");
    res.status(200).send(grades);
  } catch (err) {
    res.status(400).send({
      status: "fail to get the details",
      error: err.message,
    });
  }
};

const addGrade = async (req, res) => {
  const { fullName, grade1, grade2, grade3 } = req.body;

  const grade = new Grade({
    fullName,
    grade1,
    grade2,
    grade3,
  });

  grade.save((error, newGrade) => {
    if (error) {
      res.status(400).send({
        status: "fail to save in DB",
        error: error.message,
      });
    } else {
      res.status(200).send(newGrade);
    }
  });
};

module.exports = {
  getGrades,
  addGrade,
};
