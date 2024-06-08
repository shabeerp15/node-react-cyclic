import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Handle form submission logic here

		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const response = await axios.post("/api/auth/signup", { email, password });
			const token = response.data.token;
			if (token) {
				localStorage.setItem("token", token);
				navigate("/");
			}
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-1/3 p-10 shadow-md">
				{error && <p className="text-red-500 text-center">{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Your email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="test@address.com"
							required
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Your password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Confirm password
						</label>
						<input
							type="password"
							id="cn-password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
					<p className="mt-5 ">
						Already have an account?{" "}
						<Link to="/signin" className="text-blue-500 hover:text-blue-700">
							Sign in
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignupPage;
