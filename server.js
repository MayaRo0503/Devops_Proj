/*const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Define the path to the student grades file
const filePath = path.join(__dirname, "data.txt");

app.get("/", (req, res) => {
  fs.readFile("C:\3rdDevops_Projdata.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    const students = data.split("\n").map((line) => {
      const [name, exam1, exam2, exam3] = line.split(",");
      return { name, exam1, exam2, exam3 };
    });

    res.render("register", { students });
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/test", (req, res) => {
  res.send("test Hello");
});

module.exports = app;
