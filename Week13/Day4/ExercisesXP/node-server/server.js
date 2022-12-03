const http = require("http");

const user = {
  firstName: "John",
  lastName: "Doe",
};
function runServer8080() {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify(user));
  });
  server.listen(8080);
}

module.exports = {
  runServer8080: runServer8080(),
};
