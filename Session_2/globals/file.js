const fs = require("fs");

fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("File not found");
  } else {
    // Extracting port number from environment variable
    const port = data.split("=");
    console.log(port[1]);
  }
});
