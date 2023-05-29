const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const Grade = require("../models/Grade");

const fullName = "John Doe";
const grade1 = 85;
const grade2 = 90;
const grade3 = 75;

beforeEach(async () => {
  await Grade.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Testing Grade API", () => {
  test("add new grade", async () => {
    const response = await request(app).post("/grades").send({
      fullName: fullName,
      grade1: grade1,
      grade2: grade2,
      grade3: grade3,
    });
    expect(response.statusCode).toEqual(201);
    const newGrade = response.body;
    expect(newGrade.fullName).toEqual(fullName);
    expect(newGrade.grade1).toEqual(grade1);
    expect(newGrade.grade2).toEqual(grade2);
    expect(newGrade.grade3).toEqual(grade3);
  });

  test("get all grades", async () => {
    const response = await request(app).get("/grades");
    expect(response.statusCode).toEqual(404);
    const grades = response.body;
    expect(grades).toEqual({});
  });

  test("get grade by ID", async () => {
    const fullName = "John Doe";
    const grade1 = 80;
    const grade2 = 90;
    const grade3 = 85;

    // Create a grade first to get its ID
    const createResponse = await request(app).post("/grades").send({
      fullName: fullName,
      grade1: grade1,
      grade2: grade2,
      grade3: grade3,
    });

    expect(createResponse.statusCode).toEqual(201);

    const gradeId = createResponse.body._id;

    const response = await request(app).get(`/grades/${gradeId}`);
    expect(response.statusCode).toEqual(404);

    const grade = response.body;
    expect(grade.fullName).toEqual(fullName);
    expect(grade.grade1).toEqual(grade1);
  });

  test("validate name and scores", async () => {
    const fullName = "John Doe";
    const grade1 = 90;
    const grade2 = 85;
    const grade3 = 95;
    const invalidGrade2 = -10;

    const response1 = await request(app).post("/grades").send({
      fullName: "",
      grade1: -10,
      grade2: 120,
      grade3: "invalid",
    });
    expect(response1.statusCode).toEqual(400);

    const response2 = await request(app).post("/grades").send({
      fullName: fullName,
      grade1: grade1,
      grade2: invalidGrade2,
      grade3: grade3,
    });
    expect(response2.statusCode).toEqual(500);

    const response3 = await request(app).post("/grades").send({
      fullName: fullName,
      grade1: grade1,
      grade2: invalidGrade2,
      grade3: grade3,
    });
    expect(response3.statusCode).toEqual(400);

    const response4 = await request(app).post("/grades").send({
      fullName: fullName,
      grade1: grade1,
      grade2: grade2,
      grade3: invalidGrade3,
    });
    expect(response4.statusCode).toEqual(400);
  });
});
