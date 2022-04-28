import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./style.scss";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
	const [login, setLogin] = useState({});

	return (
		<div className="app">
			<Navbar Login={login} />
			<Routes>
				<Route exact path="/" element={<Home login={login} />} />
				<Route path="/Home" element={<Home login={login} />} />
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
