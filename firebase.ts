import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq12CtLrgV-9j8Vr3U5AteStLitYGOfQg",
  authDomain: "chat-gpt-messenger-d840d.firebaseapp.com",
  projectId: "chat-gpt-messenger-d840d",
  storageBucket: "chat-gpt-messenger-d840d.appspot.com",
  messagingSenderId: "20535837322",
  appId: "1:20535837322:web:daf647b80f78f3fabba373",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
