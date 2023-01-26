import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "silassessment.firebaseapp.com",
  projectId: "silassessment",
  storageBucket: "silassessment.appspot.com",
  messagingSenderId: "325913894355",
  appId: "1:325913894355:web:11745254795a04b7aee326",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider(app);
