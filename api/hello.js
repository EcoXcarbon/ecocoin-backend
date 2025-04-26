// api/hello.js
import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { userId, referredCode } = req.body;
  
  if (!userId || !referredCode) {
    return res.status(400).json({ status: "error", message: "Missing fields" });
  }

  res.status(200).json({
    status: "success",
    message: "Hello API working!",
    data: { userId, referredCode },
  });
});

export default router;
