import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";

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
const db = getFirestore(app);
