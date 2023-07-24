const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.setHeader("Context-Type", "text/html");
    res.write("<head><title>My First Page</title></head>");
    res.write("<html><body><h1>Welcome Home</h1></body></html>");
    return res.end();
  }

  if (url === "/about") {
    res.setHeader("Context-Type", "text/html");
    res.write("<head><title>My First Page</title></head>");
    res.write("<html><body><h1>About US Page</h1></body></html>");
    return res.end();
  }

  if (url === "/node") {
    res.setHeader("Context-Type", "text/html");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<html><body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    return res.end();
  }
});

server.listen(3000);
