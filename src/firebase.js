import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyArgtMaAnXFnzEuKkummN6QCddH3b6vZfs",
	authDomain: "fake-twitter-11b8e.firebaseapp.com",
	projectId: "fake-twitter-11b8e",
	storageBucket: "fake-twitter-11b8e.appspot.com",
	messagingSenderId: "232469404994",
	appId: "1:232469404994:web:1146238ccaa5be11dcfcdb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { app, auth, db };
