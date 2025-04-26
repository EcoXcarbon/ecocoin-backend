import express from "express";
import helloRouter from "./api/hello.js"; // <<--- This line is very important

const app = express();
app.use(express.json());

// ✅ Correct route mounting
app.use('/api/hello', helloRouter);

// Default homepage route
app.get("/", (req, res) => {
  res.send("✅ Welcome to EcoCoin Backend is Live!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ EcoCoin Backend running on port ${PORT}`);
});
