import React from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import Container from "../../../shared/Container";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Stay = () => {
	const infos = [
		{
			id: 1,
			title: "Malesuada Ipsum",
		},
		{
			id: 2,
			title: "Vestibulum",
		},
		{
			id: 3,
			title: "Parturient Lorem",
		},
	];

	const services = [
		{
			id: 1,
			title: "Banko.",
			brand: "You payment of 49€ has been processed!",
		},
		{
			id: 2,
			title: "Banko.",
			brand: "You got a new support message!",
		},
		{
			id: 3,
			title: "Banko.",
			brand: "You payment was declined!",
		},
		{
			id: 4,
			title: "Banko.",
			brand: "Please verify your payment of 99€!",
		},
	];

	return (
		<section className='px-10 py-16'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
					<div className='content'>
						<p className='text-base'>Notifications</p>
						<h2 className='text-4xl font-medium'>Stay notified</h2>
						<p className='text-base py-2'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
						{infos.map(info => (
							<div key={info.id} className='flex items-center my-2'>
								<small className='bg-primary rounded-full p-1 mr-2'>
									<GrFormCheckmark size={12} />
								</small>
								<small>{info.title}</small>
							</div>
						))}
						<NavLink to='/' className='text-primary flex items-center pt-5'>
							Compare Cards{" "}
							<span className='ml-2'>
								<FaArrowRight size={14} />
							</span>
						</NavLink>
					</div>
					<div className='cards'>
						{services.map(data => (
							<div className='card card-side bg-[#F8F8F8] flex items-center my-2 rounded'>
								<div className='bg-primary p-2 rounded mx-2'>
									<BsApple color='white' />
								</div>
								<div className='card-body p-2'>
									<h2 className='text-lg font-bold'>{data.title}</h2>
									<p className='text-base'>{data.brand}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Stay;
