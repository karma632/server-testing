const express = require("express");
const app = express();

app.use(express.json());

/* -------------------
   Simple Middleware
--------------------*/

// Check if user is logged in
function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  // Fake user
  req.user = {
    role: token === "admin" ? "admin" : "user"
  };

  next();
}

// Check if admin
function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admins only" });
  }

  next();
}

/* -------------------
   Routes
--------------------*/

app.get("/", (req, res) => {
  res.json({ message: "Server running 🚀" });
});

app.get("/api/admin", auth, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

/* -------------------
   Start Server
--------------------*/

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


