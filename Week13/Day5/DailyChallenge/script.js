const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/", (req, res) => {
  fs.readFile("users.json", "utf8", (err, data) => {
    let isNewUser = true;
    let textResponse = "Hello! Your account is now created!";
    let users = JSON.parse(data);
    users.forEach((user) => {
      if (user.username === req.body.username) {
        textResponse = `Username ${req.body.username} already exists`;
        isNewUser = false;
      }
    });
    res.render("index.ejs", {
      text: textResponse,
    });
    console.log("idNewUser :>> ", isNewUser);
    if (isNewUser) {
      users.push({ username: req.body.username });
      fs.writeFileSync("users.json", JSON.stringify(users), (err) => {});
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {
  fs.readFile("users.json", "utf8", (err, data) => {
    let textResponse = `Username ${req.body.username} is not register`;
    let users = JSON.parse(data);
    users.forEach((user) => {
      if (user.username === req.body.username) {
        textResponse = `Hi ${req.body.username} welcome back again!`;
      }
    });
    res.render("login.ejs", {
      text: textResponse,
    });
  });
});

app.listen(3000);
