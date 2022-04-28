import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./style.scss";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import { app, auth, db } from "./firebase";
import {
	doc,
	getDoc,
	getDocs,
	collection,
	query,
	where,
} from "firebase/firestore";

function App() {
	const [login, setLogin] = useState(false);
	const [userData, setUserData] = useState(false);

	useEffect(() => {
		if (login) {
			getUserData(login);
		}
	}, [login]);

	async function getUserData(login) {
		const colRef = collection(db, "users");
		const q = query(colRef, where("id", "==", login.uid));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setUserData(doc.data());
		});
	}

	return (
		<div className="app">
			<Navbar login={login} setLogin={setLogin} />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home login={login} userData={userData} />}
				/>
				<Route
					path="/Home"
					element={<Home login={login} userData={userData} />}
				/>
				<Route
					path="/SignIn"
					element={<SignIn setLogin={setLogin} />}
				/>
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
