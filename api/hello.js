import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, referredCode } = req.body;
  if (!userId || !referredCode) {
    return res.status(400).json({ error: "Missing userId or referredCode" });
  }
  res.status(200).json({
    message: "Hello API working!",
    userId,
    referredCode,
  });
});

export default router;