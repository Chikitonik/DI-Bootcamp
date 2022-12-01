const main = require("./main.js");

const largeNumber = main.largeNumber;
const b = 5;

console.log(largeNumber + b);

const http = require("http");
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(`<html>
  <body>
  <h1>
  Hi there at the frontend
  </h1>
  <p>${main.currentDateTime()}
  </body>
  </html>`);
});
server.listen(port, host, () => {
  console.log(`I'm listening http://${host}:${port}`);
});
