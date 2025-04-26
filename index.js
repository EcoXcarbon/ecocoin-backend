// index.js
import express from "express";
import helloRouter from "./api/hello.js";
import testRouter from "./api/test.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// API Routes
app.use("/api/hello", helloRouter);
app.use("/api/test", testRouter);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is Live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
