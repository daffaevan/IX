// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyBjx3JxzV0KAixXtPgYJSPEH6iRPPFRpFs",
  authDomain: "ix-f-e985e.firebaseapp.com",
  projectId: "ix-f-e985e",
  storageBucket: "ix-f-e985e.appspot.com",
  messagingSenderId: "890815820865",
  appId: "1:890815820865:web:b998c7029380f1fc9ec2c0",
  measurementId: "G-599D4494"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();