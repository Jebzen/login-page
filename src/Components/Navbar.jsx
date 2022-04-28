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
						<Link to="/">
							<span className="btn btn-primary">Home</span>
						</Link>
					</span>
				</li>
			)}
			{!login && (
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/SignUp">
							<span className="btn btn-primary">Sign up</span>
						</Link>
					</span>
				</li>
			)}
			{!login && (
				<li className="nav-item">
					<span className="nav-link">
						<Link to="/SignIn">
							<span className="btn btn-primary">Sign in</span>
						</Link>
					</span>
				</li>
			)}
			{login && (
				<li className="nav-item">
					<span className="nav-link">
						<a href="#" onClick={SignOut}>
							<span className="btn btn-danger">Sign out</span>
						</a>
					</span>
				</li>
			)}
		</ul>
	);
}
