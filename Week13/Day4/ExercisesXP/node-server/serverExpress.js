function runExpress5000() {
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    res.send("<h1> Test Express</h1>");
  });
  app.listen(5000);
}

module.exports = {
  runExpress5000: runExpress5000(),
};
