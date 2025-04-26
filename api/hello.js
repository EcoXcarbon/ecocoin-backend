import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, referredCode } = req.body;

    // Validate required fields
    if (!userId || !referredCode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Example: Validate userId format (optional)
    if (typeof userId !== 'string') {
      return res.status(400).json({ error: "Invalid userId format" });
    }

    // Success response
    res.status(200).json({ message: "Referral captured", points: 50 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router; // Export the router