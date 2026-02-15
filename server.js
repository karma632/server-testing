const express = require("express");
const app = express();

/* -------------------------------
   Stage 1: Deploy working server
-------------------------------- */

app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

const PORT = process.env.PORT || 3000;
const HOST = "http://localhost";

app.listen(PORT, () => {
  console.log(`Server running at: ${HOST}:${PORT}`);
});
