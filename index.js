/*const app = require("./server");

app.set("view engine", "ejs");
app.set("views", "./views");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server Started!");
});

*/
const app = require("./server");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server Started!");
});
