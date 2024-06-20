import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Users from "./pages/Users";
import PrivateRoute from "./PrivateRoute";
import Signin from "./pages/Signin";
import SignupPage from "./pages/Signup";
import NotFound from "./pages/NotFound";

const NavigationRoute = () => {
	return (
		<div>
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/users">
						<Route index element={<Users />} />
						<Route path=":id" element={<User />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default NavigationRoute;
