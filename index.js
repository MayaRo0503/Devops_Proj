/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const app = require("./server");
const connect = require("./connect");

connect();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server Started!");
});
