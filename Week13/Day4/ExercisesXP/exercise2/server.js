function run() {
  const express = require("express");
  const app = express();
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  // Exercise 1 : Express & JSON
  // app.get("/", (req, res) => {
  //   res.json(user);
  // });
  // Exercise 2 : Express & Parameters
  // app.get("/:id", (req, res) => {
  //   res.json({ id: req.params.id });
  //   console.log("res.json :>> ", { id: req.params.id });
  // });
  // Exercise 3: Express & Static Files
  app.use(express.static("public"));
  app.use(express.static("public"));
  app.get("/", (req, res) => {});

  app.listen(3000);
  console.log("Server run on 3000");
}

module.exports = {
  run: run(),
};
