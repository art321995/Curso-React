import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBDDlLwvqXr38y3fG8qhix6JkKUyeZ8FFQ",
  authDomain: "udemy-react-2024-2.firebaseapp.com",
  projectId: "udemy-react-2024-2",
  storageBucket: "udemy-react-2024-2.appspot.com",
  messagingSenderId: "1042905828478",
  appId: "1:1042905828478:web:6619ffe05c7dc504eadc2f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };