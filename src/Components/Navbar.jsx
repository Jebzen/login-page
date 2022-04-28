import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<ul className="nav justify-content-end">
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/">Home</Link>
				</span>
			</li>
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/">Sign Up</Link>
				</span>
			</li>
			<li className="nav-item">
				<span className="nav-link">
					<Link to="/">Sign In</Link>
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
