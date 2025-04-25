export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { userId, co2 } = req.body;
    if (!userId || !co2) {
      return res.status(400).json({ error: "Missing userId or co2" });
    }

    const eco = Math.floor((parseFloat(co2) / 1000) * 4);
    // Save conversion info in Firebase (dummy placeholder)

    return res.status(200).json({ message: "Credits converted", ecoGenerated: eco });
  } catch (err) {
    console.error("Conversion error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
