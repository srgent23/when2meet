// Requires Firebase compat CDN scripts loaded before this file:
//   firebase-app-compat.js
//   firebase-firestore-compat.js

const firebaseConfig = {
  apiKey: "AIzaSyBPknfzdbc0wafan91kAnq2_wOlkLf4pPg",
  authDomain: "polls-bros.firebaseapp.com",
  projectId: "polls-bros",
  storageBucket: "polls-bros.firebasestorage.app",
  messagingSenderId: "601492771551",
  appId: "1:601492771551:web:d1cf75514f0ea077f08f6a",
  measurementId: "G-1RBEKCJ1WS"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
