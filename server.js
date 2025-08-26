const hhtp = require("http");
const server = hhtp.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plan" });
  res.end("Hello world");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is running... ${PORT}`));
