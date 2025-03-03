//firebase config file
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE0ltrA3SxwFSiEh7D5VmqBvL7qVIS11w",
  authDomain: "geosos-debf6.firebaseapp.com",
  projectId: "geosos-debf6",
  storageBucket: "geosos-debf6.firebasestorage.app",
  messagingSenderId: "442154307379",
  appId: "1:442154307379:web:1e736586b90da4becaf846",
  measurementId: "G-KDDX9SYDZF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);