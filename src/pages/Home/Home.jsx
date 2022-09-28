import React from "react";
import Header from "../Home/Components/Header";
import Bangking from "./Components/Bangking";
import Instantly from "./Components/Instantly";
import SaveingAccount from "./Components/SaveingAccount";

const Home = () => {
	return (
		<main>
			<Header />
			<Bangking />
			<Instantly />
			<SaveingAccount />
		</main>
	);
};

export default Home;
