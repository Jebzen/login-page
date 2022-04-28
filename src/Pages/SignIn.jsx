import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setLogin }) {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleEmail(e) {
		setEmail(e.target.value);
	}
	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function handleValidation(e) {
		e.preventDefault();
		logInWithEmailAndPassword(email, password);
	}

	async function logInWithEmailAndPassword(email, password) {
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setLogin(userCredential.user);
				navigate("/", { replace: true });
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error, errorMessage);
			});
	}

	return (
		<main className="container my-5">
			<h1>Sign in</h1>

			<form>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={handleEmail}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={handlePassword}
					/>
				</div>
				<div className="mb-3">
					<input
						type="submit"
						className="btn btn-primary"
						value="Submit"
						onClick={handleValidation}
					/>
				</div>
			</form>
		</main>
	);
}
