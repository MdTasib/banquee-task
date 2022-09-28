import React from "react";
import Header from "../Home/Components/Header";
import Bangking from "./Components/Bangking";
import Instantly from "./Components/Instantly";

const Home = () => {
	return (
		<main>
			<Header />
			<Bangking />
			<Instantly />
			{/* <Services />
			<Experiences />
			<Feature />
			<Questions />
			<Testimonial /> */}
		</main>
	);
};

export default Home;
