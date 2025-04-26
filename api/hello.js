import express from "express";

const router = express.Router();

// POST /api/hello
router.post("/", (req, res) => {
  const { userId, referredCode } = req.body;

  if (!userId || !referredCode) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.status(200).json({ message: "Referral captured successfully", points: 50 });
});

export default router;
