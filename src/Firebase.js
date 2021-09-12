import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})

// Initialize Firebase
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const fieldValue = firebase.firestore.FieldValue;