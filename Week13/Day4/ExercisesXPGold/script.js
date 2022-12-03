const express = require("express");
const app = express();

app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("req :>> ", req.body);
  res.send(req.body);
});
app.listen(3001);
console.log("Server listening on 3001");
