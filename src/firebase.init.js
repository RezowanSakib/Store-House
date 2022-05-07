// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzY0F1bCDpUrn8f79KgX8zj41dWNgy3JY",
  authDomain: "werehouse-3cce7.firebaseapp.com",
  projectId: "werehouse-3cce7",
  storageBucket: "werehouse-3cce7.appspot.com",
  messagingSenderId: "1040322613180",
  appId: "1:1040322613180:web:26b198cd0dd51206d465b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
