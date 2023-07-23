import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firbaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIRBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIRBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIRBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIRBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIRBASE_APP_ID,
};

const app = initializeApp(firbaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log("Unexpected Error");
  }
};

export const logout = () => {
  console.log("out");
  signOut(auth);
};

export default app;
