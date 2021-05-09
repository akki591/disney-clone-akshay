import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3eGARn8hSRg-Z0bnOYUfJygw69A4eIQk",
  authDomain: "disney-clone-akshay.firebaseapp.com",
  projectId: "disney-clone-akshay",
  storageBucket: "disney-clone-akshay.appspot.com",
  messagingSenderId: "349339694530",
  appId: "1:349339694530:web:03f059a83cbb5bae2c125b",
  measurementId: "G-KEN4XJTZ22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
