import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const Users = () => {
	const navigate = useNavigate();

	const { data, loading } = useAxios({ url: "/api/users" });

	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">Users List</h1>
			<table className="table w-full border p-5">
				<thead>
					<tr className="text-left border border-gray-300 p-g">
						<th>ID</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{data?.users?.map((user) => (
						<tr key={user._id} className="">
							<td>{user._id}</td>
							<td>
								<Link to={`/users/${user._id}`}>{user.email}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
