const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`
  <h1>Test 1</h1>
  <h3>Test 2</h1>
  <p>Test 3</h1>
  `);
});

server.listen(3000);

const server8080 = require("./server.js");
server8080.runServer8080;

const ExpressServer5000 = require("./serverExpress.js");
ExpressServer5000.runExpress5000;
