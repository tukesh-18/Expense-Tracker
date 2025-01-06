// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjyYLxycpfi0jjS317qMx3RT5ZgUmfGfI",
  authDomain: "expense-tracker-25548.firebaseapp.com",
  projectId: "expense-tracker-25548",
  storageBucket: "expense-tracker-25548.firebasestorage.app",
  messagingSenderId: "437441164544",
  appId: "1:437441164544:web:d9e7db5c9a2b07e3a4afe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);