import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG1MXknUHmoXRkTKH_VSD9j8bmbPoxSgU",
  authDomain: "challenge-3536e.firebaseapp.com",
  projectId: "challenge-3536e",
  storageBucket: "challenge-3536e.appspot.com",
  messagingSenderId: "413602545672",
  appId: "1:413602545672:web:3be5188c97e7d01a1e91bd",
  measurementId: "G-0EV9V4FKBN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };