const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("daily challenge ex");
});
app.get("/aboutMe/:hobby", (req, res) => {
  const hobby = req.params.hobby;
  if (isNaN(hobby) && !!hobby) {
    res.send(`my hobby is ${hobby}`);
  } else res.sendStatus(404);
});
app.get("/pic", (req, res) => {
  res.sendFile(__dirname + "/image.jpg");
});
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});
app.post("/formData", (req, res) => {
  res.send(`${req.body.email} sent you a message ${req.body.message}`);
});
app.listen(3000, () => console.log("Server listen on 3000"));
