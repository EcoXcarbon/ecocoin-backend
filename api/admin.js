import { db } from './firebaseAdmin.js';
import { getDocs, collection, updateDoc, doc } from 'firebase-admin/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const snap = await getDocs(collection(db, 'ecoContributions'));
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
      const body = req.body || (await parseBody(req));
      const { id, ecoPoints, verified, adminNote } = body;

      if (!id || ecoPoints === undefined) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
      }

      const contributionRef = doc(db, 'ecoContributions', id);
      await updateDoc(contributionRef, {
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
