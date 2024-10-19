// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlNnuFqcthCkwZCaqKWXxnon0GBN_2Ogg",
  authDomain: "learntk.firebaseapp.com",
  projectId: "learntk",
  storageBucket: "learntk.appspot.com",
  messagingSenderId: "608383248005",
  appId: "1:608383248005:web:77c2839cfdd43c18aeabec",
  measurementId: "G-RLKJNM5HKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);