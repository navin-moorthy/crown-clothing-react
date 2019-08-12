import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5bIa1E55zDzEYnRe0zsw7kXxejifBsy0",
  authDomain: "crown-clothing-db-ec57f.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-ec57f.firebaseio.com",
  projectId: "crown-clothing-db-ec57f",
  storageBucket: "",
  messagingSenderId: "137189619024",
  appId: "1:137189619024:web:1216d928d5eafe8b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
