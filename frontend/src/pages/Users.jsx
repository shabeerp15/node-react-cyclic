import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [sorted, setSorted] = useState(false);
	const [Loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const fetchUsers = async () => {
			try {
				const { data } = await axios.get("/api/users/", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				setUsers(data.users);
				setLoading(false);
			} catch (error) {
				if (error.response.statusText === "Unauthorized") {
					localStorage.removeItem("token");
					navigate("/signin");
				}
			}
		};

		fetchUsers();
	}, []);

	const handleSort = () => {
		const sortedUsers = [...users].sort((a, b) => (!sorted ? b.id - a.id : a.id - b.id));
		setUsers(sortedUsers);
		setSorted(!sorted);
	};

	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">Users List</h1>
			<table className="table w-full border p-5">
				<thead>
					<tr className="text-left border border-gray-300 p-g">
						<th onClick={handleSort}>ID</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Website</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>
					{Loading && <td>Loading...</td>}
					{!Loading &&
						users?.map((user) => (
							<tr key={user.id} className="">
								<td>{user.id}</td>
								<td>
									<Link to={`/users/${user.id}`}>{user.name}</Link>
								</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.website}</td>
								<td>{user.company.name}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
