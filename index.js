const app = require("./server");
const connect = require("./connect");

connect();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server Started!");
});
