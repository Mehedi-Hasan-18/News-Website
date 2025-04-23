// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH26wWIoYB0PQDAbqs_fsN5_8pgu00NeI",
  authDomain: "dragone-auth.firebaseapp.com",
  projectId: "dragone-auth",
  storageBucket: "dragone-auth.firebasestorage.app",
  messagingSenderId: "731328521795",
  appId: "1:731328521795:web:fa1a10994094593e3f96f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;