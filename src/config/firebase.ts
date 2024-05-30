import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxP3SPY8IuchEtKHXZb80oWcnaF-izzeo",
  authDomain: "jobsavvy-db.firebaseapp.com",
  projectId: "jobsavvy-db",
  storageBucket: "jobsavvy-db.appspot.com",
  messagingSenderId: "505738283977",
  appId: "1:505738283977:web:a4c33916d68585bd47f618",
  measurementId: "G-H23BN35XV3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();

export const db = getFirestore(app);