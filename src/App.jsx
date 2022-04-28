import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./style.scss";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
	const [Login, SetLogin] = useState({});

	return (
		<div className="app">
			<Navbar Login={Login} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/SignIn" element={<SignIn />} />
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
