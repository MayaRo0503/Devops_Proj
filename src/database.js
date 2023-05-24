const fs = require("fs");

const storeRegistration = (name, exam1, exam2, exam3) => {
  const data = `${name},${exam1},${exam2},${exam3}\n`;
  fs.appendFile("data.txt", data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data stored successfully");
    }
  });
};

module.exports = {
  storeRegistration,
};
