import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzioSGqHCzoS2-woecoZkcT20CQZymcC0",
  authDomain: "netflix-clone-fd77e.firebaseapp.com",
  projectId: "netflix-clone-fd77e",
  storageBucket: "netflix-clone-fd77e.appspot.com",
  messagingSenderId: "476019528104",
  appId: "1:476019528104:web:025b6fadf50018e5da4d9d",
  measurementId: "G-49E0QSN4WF",
};

// Project Console: https://console.firebase.google.com/project/netflix-clone-fd77e/overview
// Hosting URL: https://netflix-clone-fd77e.web.app

const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebasApp.firestore(); //realtime database
const auth = firebase.auth();

export { auth };
export default db;
