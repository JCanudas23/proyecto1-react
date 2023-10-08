// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKr8Dpzri2AVdycfmpCgIbE0ICUd_T1ME",
  authDomain: "ecommerce-84654.firebaseapp.com",
  projectId: "ecommerce-84654",
  storageBucket: "ecommerce-84654.appspot.com",
  messagingSenderId: "23591288847",
  appId: "1:23591288847:web:26d0eb3dacf0dee4a0a37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)