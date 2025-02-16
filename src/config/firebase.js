// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIa0g6tmY3ysi2Lfv3XA4l1cKm5WwTjPk",
  authDomain: "irctc-app-f94ac.firebaseapp.com",
  projectId: "irctc-app-f94ac",
  storageBucket: "irctc-app-f94ac.firebasestorage.app",
  messagingSenderId: "780932567948",
  appId: "1:780932567948:web:aa15216738df35ef137ca9",
  measurementId: "G-H9VFBVLJ3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);