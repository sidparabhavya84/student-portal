// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbOJY1KEvp6pweysgjqGB46Rs2hR0xbWE",
  authDomain: "crud-api-6ebaf.firebaseapp.com",
  projectId: "crud-api-6ebaf",
  storageBucket: "crud-api-6ebaf.appspot.com",
  messagingSenderId: "465767556472",
  appId: "1:465767556472:web:13245c3d7f557c3b84d48d"
};

// Initialize Firebase
// const MyFirebase = initializeApp(firebaseConfig);
// export const auth = getAuth(MyFirebase);

const firebase = initializeApp(firebaseConfig);
export const Auth = getAuth(firebase);
export const db = getFirestore(firebase);