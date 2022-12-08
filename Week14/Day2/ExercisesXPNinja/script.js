const express = require("express");
const app = express();

const axios = require("axios");

// app.use(express.static("public"));
app.get("/", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
    res.send(data[0].name);
  });
});

// app.get("/", (req, res) => {
//   axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/users",
//     responseType: "text",
//   }).then((data) => {
//     res.send(data.data);
//   });
// });

app.listen(3000, () => console.log("Server listening on 3000"));
