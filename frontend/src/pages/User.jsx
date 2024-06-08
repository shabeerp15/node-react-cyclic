import axios from "axios";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [user, setUser] = useState(null);

	const fetchUser = useCallback(async () => {
		try {
			const { data } = await axios.get(`/api/users/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			setUser(data.user);
		} catch (error) {
			if (error.response.statusText === "Unauthorized") {
				localStorage.removeItem("token");
				navigate("/signin");
			}
		}
	}, [id]);
	useEffect(() => {
		fetchUser();
	}, [id]);

	return (
		<div className="p-5 shadow-lg rounded font-bold">
			<button onClick={() => navigate(-1)} className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-50">
				Go Back
			</button>
			{user && (
				<div>
					<h2>Name: {user.name}</h2>
					<h2>Username: {user.username}</h2>
					<h2>Email: {user.email}</h2>
					<h2>Phone: {user.phone}</h2>
					<h2>
						Address:
						<div>
							{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
						</div>
					</h2>
					<h2>
						Company:
						<div>
							{user.company.name}, {user.company.catchPhrase}, {user.company.bs}
						</div>
					</h2>
				</div>
			)}
		</div>
	);
};

export default User;
