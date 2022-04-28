import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ login, setLogin }) {
	let navigate = useNavigate();

	function SignOut() {
		signOut(auth);
		setLogin(false);
		navigate("/SignIn", { replace: true });
	}

	return (
		<ul className="nav justify-content-end">
			{login && (
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/">Home</Link>
					</span>
				</li>
			)}
			{!login && (
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/SignUp">Sign Up</Link>
					</span>
				</li>
			)}
			{!login && (
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/SignIn">Sign In</Link>
					</span>
				</li>
			)}
			{login && (
				<li className="nav-item">
					<span className="nav-link">
						<a href="#" onClick={SignOut}>
							Sign Out
						</a>
					</span>
				</li>
			)}
		</ul>
	);
}
