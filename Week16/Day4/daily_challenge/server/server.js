const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json([{ text: "Hello from express" }]);
});

app.post("/world", (req, res) => {
  console.log("req.body :>> ", req.body.text);
  res.json([
    {
      text: `I received your POST request. This is what you sent me: ${req.body.text}`,
    },
  ]);
});

app.listen(3001);
console.log("listening on 3001");
