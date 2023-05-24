const { storeRegistration } = require("../src/database");

describe("Registration Tests", () => {
  it("should store the registration data", () => {
    const name = "John Doe";
    const exam1 = 90;
    const exam2 = 85;
    const exam3 = 95;
    storeRegistration(name, exam1, exam2, exam3);
    // Add assertions to validate the result
  });
});
