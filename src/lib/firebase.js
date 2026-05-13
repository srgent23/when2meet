// Requires Firebase compat CDN scripts and firebase-config.js loaded before this file.
// See src/lib/firebase-config.example.js for the expected shape of window.FIREBASE_CONFIG.

if (!window.FIREBASE_CONFIG) {
  throw new Error("Firebase config not found. Copy firebase-config.example.js to firebase-config.js and fill in your project values.");
}

firebase.initializeApp(window.FIREBASE_CONFIG);

const db = firebase.firestore();
