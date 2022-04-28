import { app, auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export default function Home({ login }) {
	const [userInfo, setUserInfo] = useState();
	let navigate = useNavigate();

	if (login == {}) {
		navigate("/SignIn", { replace: true });
	} else {
		console.log("My stinky butt");
	}

	async function userInfoFunc() {
		const docRef = doc(db, "users", login.uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}

	return (
		<main className="container my-5">
			<h1>Hello {login.email}</h1>
		</main>
	);
}
