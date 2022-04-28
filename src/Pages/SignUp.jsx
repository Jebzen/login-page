import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { app, auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	let navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conPassword, setConPassword] = useState("");

	function handleName(e) {
		setName(e.target.value);
	}
	function handleEmail(e) {
		setEmail(e.target.value);
	}
	function handlePassword(e) {
		setPassword(e.target.value);
	}
	function handleConPassword(e) {
		setConPassword(e.target.value);
	}

	function handleValidation(e) {
		e.preventDefault();

		const SamePassword = password === conPassword;
		const GoodPassword = password.length > 7;
		const CPHemail =
			email.length > 15 &&
			email.slice(-15).toLowerCase() == "@cphbusiness.dk";
		const ValidName = name.length > 0;

		//Password == Confirm password
		//Email is cphBusiness
		//Passowrd is over 7 characters long

		console.log(SamePassword, GoodPassword, CPHemail, ValidName);
		if (SamePassword && GoodPassword && CPHemail && ValidName) {
			registerWithEmailAndPassword(name, email, password);
		}
	}

	async function registerWithEmailAndPassword(username, email, password) {
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = res.user;
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				username,
				authProvider: "local",
				email,
			});
			navigate("/SignIn", { replace: true });
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	}

	return (
		<main className="container my-5">
			<h1>Sign up</h1>

			<form>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Name / Username
					</label>
					<input
						type="text"
						className="form-control"
						value={name}
						onChange={handleName}
					/>
				</div>
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
					<label htmlFor="" className="form-label">
						Confirm password
					</label>
					<input
						type="password"
						className="form-control"
						value={conPassword}
						onChange={handleConPassword}
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
