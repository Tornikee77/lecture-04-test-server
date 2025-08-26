const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });
// app.get("/about", (req, res) => {
//   res.send("bout us page");
// });
// app.get("/contact", function (req, res) {
//   res.send("Hello from Contact page");
// });
// app.get("/product/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send(`your requested product with: ${req.params.id}`);
// });
// app.get("/product/search", (req, res) => {
//   console.log(req.params.id);
//   res.send("query string");
// });

app.get("/", (req, res) => {
  res.json({ message: "Hello", author: "Giorgi" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
