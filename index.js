const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Load your handlers
const submitHandler = require("./api/submit");
const adminHandler = require("./api/admin");

// Route bindings
app.post("/api/submit", submitHandler); // or app.get if your handler uses GET
app.post("/api/admin", adminHandler);   // adjust to app.get if needed

// Health check route (optional)
app.get("/", (req, res) => {
  res.send("🚀 Ecocoin Backend is Live");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Ecocoin backend running at http://localhost:${PORT}`);
});
