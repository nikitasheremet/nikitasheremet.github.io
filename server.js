const express = require("express");
var path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
const port = 9000;

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
