// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvm9G5-RmC4rLP1bRFTlPBWi-dC4iiMUU",
  authDomain: "express-emporiam-app.firebaseapp.com",
  projectId: "express-emporiam-app",
  storageBucket: "express-emporiam-app.firebasestorage.app",
  messagingSenderId: "98719258090",
  appId: "1:98719258090:web:a9fb39be9def1937300e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);