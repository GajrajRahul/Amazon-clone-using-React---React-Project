// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const db = require("firebase/database");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYCKGR4OQHscz0mk7IfK1HgL5oY4VxL-A",
  authDomain: "clone-10b46.firebaseapp.com",
  projectId: "clone-10b46",
  storageBucket: "clone-10b46.appspot.com",
  messagingSenderId: "778865912482",
  appId: "1:778865912482:web:409feb7148f44b33df05fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth, db};
