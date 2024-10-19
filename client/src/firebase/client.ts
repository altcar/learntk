import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAlNnuFqcthCkwZCaqKWXxnon0GBN_2Ogg",
    authDomain: "learntk.firebaseapp.com",
    projectId: "learntk",
    storageBucket: "learntk.appspot.com",
    messagingSenderId: "608383248005",
    appId: "1:608383248005:web:77c2839cfdd43c18aeabec",
    measurementId: "G-RLKJNM5HKF"
  };

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);