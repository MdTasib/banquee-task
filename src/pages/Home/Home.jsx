import React from "react";
import Experiences from "../Home/Components/Experiences";
import Feature from "../Home/Components/Feature";
import Header from "../Home/Components/Header";
import Questions from "../Home/Components/Questions";
import Services from "../Home/Components/Services";
import Testimonial from "../Home/Components/Testimonial";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Experiences />
			<Feature />
			<Questions />
			<Testimonial />
		</main>
	);
};

export default Home;
