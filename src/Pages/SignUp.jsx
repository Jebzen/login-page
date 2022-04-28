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

	const [samePassword, setSamePassword] = useState(true);
	const [goodPassword, setGoodPassword] = useState(true);
	const [cPHemail, setCPHemail] = useState(true);
	const [validName, setValidName] = useState(true);

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

		setSamePassword(password === conPassword);
		setGoodPassword(password.length > 7);
		setCPHemail(
			email.length > 15 &&
				email.slice(-15).toLowerCase() == "@cphbusiness.dk"
		);
		setValidName(name.length > 0);

		//Password == Confirm password
		//Email is cphBusiness
		//Passowrd is over 7 characters long
		//name over 0 characters

		console.log(samePassword, goodPassword, cPHemail, validName);
		if (samePassword && goodPassword && cPHemail && validName) {
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
				id: user.uid,
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
					{!validName && (
						<small className="text-danger">
							Username too short... like it need to be over 0
							characters... like really?
						</small>
					)}
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
					{!cPHemail && (
						<small className="text-danger">
							Wrong domain. Only accepts CPHbusiness.dk emails
						</small>
					)}
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
					{!goodPassword && (
						<small className="text-danger">
							Bad password. It needs to be over 7 characters long
						</small>
					)}
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
					{!samePassword && (
						<small className="text-danger">
							Passwords are not the same
						</small>
					)}
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
