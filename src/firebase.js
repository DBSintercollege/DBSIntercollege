// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf4qOnKVVpCoUc7Drom-34v1B8RmIneUw",
  authDomain: "dbs-inter-college-9f792.firebaseapp.com",
  projectId: "dbs-inter-college-9f792",
  storageBucket: "dbs-inter-college-9f792.firebasestorage.app",
  messagingSenderId: "564114904282",
  appId: "1:564114904282:web:0a828aec835c203d4881e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);