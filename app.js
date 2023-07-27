const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Another Middleware");
});

const server = http.createServer(app);

server.listen(3000);
