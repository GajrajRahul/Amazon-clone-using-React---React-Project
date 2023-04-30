// import firebase from "firebase";
import {initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from 'firebase/auth'
// const db = require("firebase/database")

const firebaseConfig = {
  apiKey: "AIzaSyBA9FXPnmpDwgeD7VHIvnDb5I4F3OGbir8",
  authDomain: "amz-clone-806a0.firebaseapp.com",
  projectId: "amz-clone-806a0",
  storageBucket: "amz-clone-806a0.appspot.com",
  messagingSenderId: "644345386019",
  appId: "1:644345386019:web:5485fe233c2931ad010d96",
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = getAuth();

// const auth = require('firebase/auth');
export { db, auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword};
