const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, world! This is my server on localhost:10000.");
});

server.listen(10000, () => {
  console.log("Listening on port ", 10000);
});
