// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database'; // Realtime Database functions

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtdoIuHWh_Mf7IB9QzRN1DHoCF2fUXFh4",
  authDomain: "xpress-tour.firebaseapp.com",
  databaseURL: "https://xpress-tour-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xpress-tour",
  storageBucket: "xpress-tour.firebasestorage.app",
  messagingSenderId: "1094017061576",
  appId: "1:1094017061576:web:36f09f4ae2d8007ab84bfd",
  measurementId: "G-KCFXFKN2GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Realtime Database reference
const db = getDatabase(app);

// Export the Firebase functions to be used in other files
export { db, ref, set, onValue };
