import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB831XQtUBTKfgC5L3iBwG5xYkk2IiTIBs",
  authDomain: "house-marketplace-app-b9618.firebaseapp.com",
  projectId: "house-marketplace-app-b9618",
  storageBucket: "house-marketplace-app-b9618.appspot.com",
  messagingSenderId: "876106202897",
  appId: "1:876106202897:web:d93f395a8df5b1dedc96b0"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()