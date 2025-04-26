// api/hello.js

import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, referredCode } = req.body;

    if (!userId || !referredCode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    return res.status(200).json({ message: "Referral tracked", points: 50 });
  } catch (err) {
    console.error("Referral error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
