// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf6AydwelU63UeuGVM3bx-njfA675ZKPs",
    authDomain: "devjosh-db.firebaseapp.com",
    projectId: "devjosh-db",
    storageBucket: "devjosh-db.firebasestorage.app",
    messagingSenderId: "370505115374",
    appId: "1:370505115374:web:61c1b9baab1b3d951c75ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)