// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFwMPzjdebqc-mZc2fO9KWaQzk9m4iOnA",
  authDomain: "dream-league-2023-teambuilder.firebaseapp.com",
  projectId: "dream-league-2023-teambuilder",
  storageBucket: "dream-league-2023-teambuilder.appspot.com",
  messagingSenderId: "174019198824",
  appId: "1:174019198824:web:69a715a8078f9d34e4e0dd",
  measurementId: "G-71GRHYZKMD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
