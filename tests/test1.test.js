const app = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const Grade = require("../models/Grade");

const fullName = "Maya Rozenberg";
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
});
