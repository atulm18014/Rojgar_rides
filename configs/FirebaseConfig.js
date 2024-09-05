// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4E6CELMxnG-3tac6YSPaPnq7HM7HLmQU",
  authDomain: "rojgar-rides-2024iet.firebaseapp.com",
  projectId: "rojgar-rides-2024iet",
  storageBucket: "rojgar-rides-2024iet.appspot.com",
  messagingSenderId: "103997993421",
  appId: "1:103997993421:web:521a4fd1704d7e2aa91484",
  measurementId: "G-0FVYQV241R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
