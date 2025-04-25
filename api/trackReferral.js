export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { userId, referredCode } = req.body;

    if (!userId || !referredCode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Placeholder logic for referral score
    return res.status(200).json({ message: "Referral tracked", points: 50 });
  } catch (err) {
    console.error("Referral error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
