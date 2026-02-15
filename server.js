const express = require("express");
const app = express();

/* -------------------------------
   Middleware
-------------------------------- */

// This enables JSON requests & responses
app.use(express.json());

/* -------------------------------
   Routes
-------------------------------- */

app.get("/", (req, res) => {
  res.json({
    message: "Server is working 🚀"
  });
});

/* -------------------------------
   Start Server
-------------------------------- */

const PORT = process.env.PORT || 3000;
const HOST = "http://localhost";

app.listen(PORT, () => {
  console.log(`Server running at: ${HOST}:${PORT}`);
});
