import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4KhptL_VvxGadWVcooDyaXNx8v7_NSdo",
  authDomain: "chat-5b47d.firebaseapp.com",
  projectId: "chat-5b47d",
  storageBucket: "chat-5b47d.appspot.com",
  messagingSenderId: "421203398458",
  appId: "1:421203398458:web:750ca20fa430f5117f0a03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
