// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm81C0m2KRWIgvIChgbfjKT9_7DdGZ-4E",
    authDomain: "tarot-cafe.firebaseapp.com",
    projectId: "tarot-cafe",
    storageBucket: "tarot-cafe.appspot.com",
    messagingSenderId: "221625687794",
    appId: "1:221625687794:web:51269cbea44e8b23a4fa6b"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
