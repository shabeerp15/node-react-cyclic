import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
	}, [navigate]);

	return (
		<div className="flex">
			<div className="flex-grow-0 flex-shrink-0 w-3/12 h-screen shadow-md">
				<Navbar />
			</div>
			<div className="flex-grow flex-shrink-0 w-9/12 h-screen p-5">
				<Outlet />
			</div>
		</div>
	);
};

export default PrivateRoute;
