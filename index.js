// index.js

import express from "express";
import hello from "./api/hello.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is live!");
});

// Connect hello route
app.post("/api/hello", hello);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
