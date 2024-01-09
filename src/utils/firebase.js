// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmDxDnUfkd8Z2NqGQIGWy7GahLadMDgU",
  authDomain: "netflix-gpt-2b196.firebaseapp.com",
  projectId: "netflix-gpt-2b196",
  storageBucket: "netflix-gpt-2b196.appspot.com",
  messagingSenderId: "426434966760",
  appId: "1:426434966760:web:927020ac2ea561e4a7455d",
  measurementId: "G-DYW1Y0T6DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();