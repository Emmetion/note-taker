import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwRxG8J9acJRmPehuTfdPm66fY-vEPid0",
  authDomain: "note-taker-f0a92.firebaseapp.com",
  projectId: "note-taker-f0a92",
  storageBucket: "note-taker-f0a92.appspot.com",
  messagingSenderId: "129562040192",
  appId: "1:129562040192:web:9f102a130d99bef2b39365",
  measurementId: "G-HEDDX64290"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);