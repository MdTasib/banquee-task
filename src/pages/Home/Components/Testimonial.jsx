import React from "react";
import Slider from "react-slick";
import imgEx from "../../../assets/images/testimonialimg.png";
import testimonials from "../../../data/testimonials";
import "../../../assets/styles/testimonial.css";

const Testimonial = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section className='pb-20 w-2/4 mx-auto '>
			<div className='text-center font-medium'>
				<p className='text-secondary'>Testimonial</p>
				<h3 className='text-3xl leading-10'>What they say?</h3>
			</div>

			<Slider {...settings} className='pt-10'>
				{testimonials.map(testimonial => (
					<div className='hero bg-white rounded-lg'>
						<div className='hero-content flex-col lg:flex-row-reverse'>
							<img src={imgEx} className='max-w-sm' alt='' />
							<div>
								<p className='text-sm font-medium'>{testimonial.author}</p>
								<p className='text-xs py-2'>{testimonial.catagory}</p>
								<p className='text-sm'>{testimonial.description}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default Testimonial;

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className}`}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", marginLeft: "-30px" }}
			onClick={onClick}
		/>
	);
}
