// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1VSWrvUlFqdtVyqcNpIP97VjnkJ4vHCU",
  authDomain: "dinocomp-4c53d.firebaseapp.com",
  projectId: "dinocomp-4c53d",
  storageBucket: "dinocomp-4c53d.firebasestorage.app",
  messagingSenderId: "799131674141",
  appId: "1:799131674141:web:84947acd4cab2ce7d4c8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);