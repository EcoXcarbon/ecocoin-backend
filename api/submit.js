// api/submit.js
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase
let db;
try {
  const serviceAccount = process.env.FIREBASE_ADMIN_KEY ? JSON.parse(process.env.FIREBASE_ADMIN_KEY) : null;
  
  if (!serviceAccount) {
    throw new Error('Firebase Admin Key is missing in environment variables');
  }

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
  
  db = getFirestore();
} catch (error) {
  console.error('🔥 Firebase Initialization Error:', error);
  throw error; // This will make the function fail fast during initialization
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse the request body
    let requestBody;
    try {
      requestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (parseError) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }

    // Validate required fields
    if (!requestBody?.category || !requestBody?.co2) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: {
          required: ['category', 'co2'],
          received: Object.keys(requestBody)
        }
      });
    }

    // Add document to Firestore
    const docRef = await db.collection('carbonRecords').add({
      ...requestBody,
      createdAt: new Date().toISOString(),
    });

    return res.status(200).json({ 
      success: true, 
      id: docRef.id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🔥 Submit API Error:', {
      message: error.message,
      stack: error.stack,
      request: {
        method: req.method,
        headers: req.headers,
        body: req.body
      }
    });
    
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}