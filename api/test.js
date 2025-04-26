// api/test.js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Test API is working fine!");
});

export default router;
