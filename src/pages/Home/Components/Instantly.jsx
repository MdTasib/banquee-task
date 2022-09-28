import React from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import Container from "../../../shared/Container";

const Instantly = () => {
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
			title: "Apple",
			brand: "Macbook",
			price: -999,
		},
		{
			id: 2,
			title: "Amazon",
			brand: "Electronics",
			price: 345,
		},
		{
			id: 3,
			title: "Twitter",
			brand: "Ads",
			price: -299,
		},
		{
			id: 4,
			title: "Microsoft",
			brand: "Office Suite",
			price: 499,
		},
		{
			id: 5,
			title: "Dropbox",
			brand: "Cloud",
			price: 99,
		},
	];

	return (
		<section className='px-10 py-16 bg-[#E8F2EE]'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
					<div className='content'>
						<h2 className='text-4xl font-medium'>
							Send & receive money instantly
						</h2>
						<p className='text-base py-2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et.
						</p>
						{infos.map(info => (
							<div key={info.id} className='flex items-center my-2'>
								<small className='bg-primary rounded-full p-1 mr-2'>
									<GrFormCheckmark size={12} />
								</small>
								<small>{info.title}</small>
							</div>
						))}
					</div>
					<div className='cards'>
						{services.map(data => (
							<div className='card card-side bg-base-100 shadow-xl flex items-center my-2 rounded'>
								<div className='bg-primary p-2 rounded ml-2'>
									<BsApple color='white' />
								</div>
								<div className='card-body p-2'>
									<h2 className='text-lg font-bold'>{data.title}</h2>
									<p className='text-base'>{data.brand}</p>
								</div>
								<p className='justify-end pr-2'>{data.price} €</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Instantly;
