import { Link } from "react-router-dom";
import * as fire from "../firebase";

export default function Navbar({ Login }) {
	return (
		<ul className="nav justify-content-end">
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/">Home</Link>
				</span>
			</li>
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/SignUp">Sign Up</Link>
				</span>
			</li>
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/SignIn">Sign In</Link>
				</span>
			</li>
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/">Sign Out</Link>
				</span>
			</li>
		</ul>
	);
}
