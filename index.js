const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Campus Pre-loved Marketplace</h1><p>Welcome to the student marketplace.</p>");
});

app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
