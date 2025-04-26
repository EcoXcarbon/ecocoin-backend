import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, referredCode } = req.body;

    if (!userId || !referredCode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Example success response
    res.status(200).json({ message: "Referral captured", points: 50 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
