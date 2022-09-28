import React from "react";
import Header from "../Home/Components/Header";
import Bangking from "./Components/Bangking";
import Client from "./Components/Client";
import Instantly from "./Components/Instantly";
import SaveingAccount from "./Components/SaveingAccount";
import Stay from "./Components/Stay";

const Home = () => {
	return (
		<main>
			<Header />
			<Bangking />
			<Instantly />
			<SaveingAccount />
			<Stay />
			<Client />
		</main>
	);
};

export default Home;
