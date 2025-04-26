import express from "express";
import helloRouter from "./api/hello.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is Live!");
});

// Mount /api/hello
app.use("/api/hello", helloRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
