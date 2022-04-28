import { app, auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export default function Home({ login, userData }) {
	let navigate = useNavigate();

	useEffect(() => {
		if (!login) {
			navigate("/SignIn");
		}
	}, []);

	return (
		<main className="container my-5">
			<h1>Hello {userData.username}</h1>
		</main>
	);
}
