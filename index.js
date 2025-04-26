// index.js
import express from "express";
import helloRouter from "./api/hello.js";
import testRouter from "./api/test.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is Live!");
});

// Routes
app.use("/api/hello", helloRouter);
app.use("/api/test", testRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
