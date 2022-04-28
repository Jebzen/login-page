import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
