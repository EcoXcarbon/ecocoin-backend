import express from "express";
import helloRouter from "./api/hello.js";
import testRouter from "./api/test.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/hello", helloRouter);
app.use("/api/test", testRouter);

app.get("/", (req, res) => {
  res.send("✅ EcoCoin Backend is Live!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});