const { app, connect } = require("../server");
const request = require("supertest");
const mongoose = require("mongoose");
const Grade = require("../models/Grade");

describe("Homepage", () => {
  beforeAll(async () => {
    await connect();
    console.log("Connected to MongoDB");
  });

  test("GET / should return the homepage", async () => {
    const response = await request(app).get("/register");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<!DOCTYPE html>");
  });
});
