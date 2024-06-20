import React from "react";

const NavBar2 = () => {
	const [showDropdown, setShowDropdown] = React.useState(false);
	return (
		<nav className="navbar bg-base-100 shadow-lg px-4 py-2 mb-10">
			<div className="flex items-center justify-between w-full">
				{/* Logo or brand */}
				<a href="/" className="flex items-center text-xl font-bold text-primary">
					{/* Consider replacing with an actual logo or brand */}
					<span className="mr-2">Logo</span>
				</a>

				{/* Search input */}
				<div className="flex-none mr-2">
					<div className="form-control">
						<input type="text" placeholder="Search" className="rounded-md border border-gray-600 focus:outline-none px-4 py-2 w-36 md:w-48 lg:w-56" />
					</div>
				</div>

				{/* User menu dropdown */}
				<div className="relative">
					<button tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="User menu" onClick={() => setShowDropdown(!showDropdown)}>
						<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User avatar" className="w-10 h-10 rounded-full" />
					</button>

					{/* Dropdown menu */}
					{showDropdown && (
						<ul className="absolute right-0 mt-2 w-52 origin-top-right bg-base-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Profile
									<span className="ml-1 inline-block px-2 py-0.5 bg-primary text-white rounded-full text-xs">New</span>
								</a>
							</li>
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Settings
								</a>
							</li>
							<li>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Logout
								</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar2;
