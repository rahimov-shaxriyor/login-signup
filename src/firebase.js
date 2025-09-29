import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIjis0cS98Tmzd6_h3Z1H-2LrsJA7XJyI",
  authDomain: "quotes-project-d235a.firebaseapp.com",
  projectId: "quotes-project-d235a",
  storageBucket: "quotes-project-d235a.firebasestorage.app",
  messagingSenderId: "48961281727",
  appId: "1:48961281727:web:12f4fab8e09b63ae38700a",
  measurementId: "G-KBDQQ1MT9S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut };

