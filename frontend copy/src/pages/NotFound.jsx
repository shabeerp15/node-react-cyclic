// src/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center h-screen w-full text-center ">
			<div className="w-1/3 h-1/3 p-10 shadow-md">
				<h1 className="text-5xl font-bold">404</h1>
				<p className="text-xl mb-3">Oops! The page you're looking for doesn't exist.</p>
				<Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Go back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
