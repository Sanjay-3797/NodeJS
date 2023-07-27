const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile(`message.txt`, message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<html><body><form action='/message' method='POST'>${data}<br/><input type='text' name='message'/><button type='submit'>Send</button></form></body></html>`
      );
      return res.end();
    });
  } else {
    res.setHeader("Context-Type", "text/html");
    res.write("<head><title>My First Page</title></head>");
    res.write("<html><body><h1>Node.Js</h1></body></html>");
    res.end();
  }
};

exports.handler = requestHandler;
