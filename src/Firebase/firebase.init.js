// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP5MV5cBqMPrI_uNH1wUcbJxmfniywe54",
  authDomain: "tooth-care-6684c.firebaseapp.com",
  projectId: "tooth-care-6684c",
  storageBucket: "tooth-care-6684c.appspot.com",
  messagingSenderId: "129865432530",
  appId: "1:129865432530:web:456698dee202fbceacdc0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;