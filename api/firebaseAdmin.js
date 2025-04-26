import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let db;

try {
  if (!process.env.FIREBASE_ADMIN_KEY) {
    throw new Error('❌ Missing FIREBASE_ADMIN_KEY in environment variables');
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);
  } catch (parseError) {
    throw new Error('❌ Malformed Firebase Admin Key - Invalid JSON format');
  }

  if (!serviceAccount.project_id || !serviceAccount.private_key) {
    throw new Error('❌ Invalid Firebase Admin Key - Missing essential fields');
  }

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
    });
  }

  db = getFirestore();

  // ✅ No await here — using .then() promise instead
  db.listCollections()
    .then(() => {
      console.log('✅ Firebase DB connected successfully.');
    })
    .catch((err) => {
      console.error('❌ Firebase DB connection test failed:', err.message);
      process.exit(1);
    });

} catch (error) {
  console.error('🔥 Critical Firebase Initialization Failure:', {
    message: error.message,
    stack: error.stack,
    envKeyExists: !!process.env.FIREBASE_ADMIN_KEY
  });
  
  process.exit(1);
}

export { db };
