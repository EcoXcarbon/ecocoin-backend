// index.js

import express from "express";
import helloHandler from "./api/hello.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Correct API Route
app.post("/api/hello", helloHandler);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is Live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
