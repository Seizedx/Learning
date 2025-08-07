// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsY9mYChNsi8tOH7OE7eQu7NO_9QdMWnI",
  authDomain: "rnproject-3b383.firebaseapp.com",
  projectId: "rnproject-3b383",
  storageBucket: "rnproject-3b383.firebasestorage.app",
  messagingSenderId: "391073761999",
  appId: "1:391073761999:web:c5a0ebe7a2766a8a8585ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };