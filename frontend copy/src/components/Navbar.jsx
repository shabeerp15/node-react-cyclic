import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/signin");
	};

	return (
		<div>
			<div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded h-screen flex flex-col">
				<h1 className="text-3xl font-bold underline">Navbar</h1>

				<nav className="flex flex-col flex-1 mt-4 ">
					<Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
						Home
					</Link>
					<Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
						Users
					</Link>
					<Link to="/about" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
						About
					</Link>
					<Link to="/contact" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
						Contact
					</Link>
					<div className="mt-auto">
						{user && <p className="">{user.email}</p>}
						<button onClick={handleLogout} className="w-full text-left block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
							Logout
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
