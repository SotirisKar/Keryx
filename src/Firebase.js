import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


firebase.initializeApp({
    apiKey: "AIzaSyDEvI123N6EqqLVLI7jr5qzWSsVlbiOO9w",
    authDomain: "keryx-a2a38.firebaseapp.com",
    projectId: "keryx-a2a38",
    storageBucket: "keryx-a2a38.appspot.com",
    messagingSenderId: "11000648407",
    appId: "1:11000648407:web:dadf121b3e165146d11692",
    measurementId: "G-6JE9Q12N90"
})

// Initialize Firebase
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const fieldValue = firebase.firestore.FieldValue;