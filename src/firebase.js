// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndwJxs9uYSNw-QdvXE7CiL6v6VuC2KuE",
  authDomain: "dbs-inter-college-64d4d.firebaseapp.com",
  projectId: "dbs-inter-college-64d4d",
  storageBucket: "dbs-inter-college-64d4d.firebasestorage.app",
  messagingSenderId: "1077421472562",
  appId: "1:1077421472562:web:bff52e2c710f191739752b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);
