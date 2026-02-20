// const http = require("http");
import http from "http";

// http.createServer(function(req, res) {
// })

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  console.log(req);

  if (req.url === "/") {
    res.end("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>Welcome to About Page</h1>");
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
