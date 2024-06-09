import { Button } from "../components/ui/button";
import React from "react";

const Home = () => {
	const handleButtonClick = () => {
		console.log("Button clicked");
	};

	return (
		<div className="">
			<div>Home Page</div>
			<Button variant="destructive" onClick={handleButtonClick}>
				Button
			</Button>
		</div>
	);
};
export default Home;
