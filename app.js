const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Sanjay");
});

server.listen(4000);