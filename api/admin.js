import { db } from './firebaseAdmin.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const snap = await db.collection('ecoContributions').get();
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return res.status(200).json({ success: true, contributions: data });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { id, ecoPoints, verified, adminNote } = req.body;

      if (!id || ecoPoints === undefined) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
      }

      const contributionRef = db.collection('ecoContributions').doc(id);
      await contributionRef.update({
        ecoPoints,
        verified: verified ?? true,
        adminNote: adminNote || '',
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
