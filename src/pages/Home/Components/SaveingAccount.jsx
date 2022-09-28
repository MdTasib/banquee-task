import React from "react";
import Container from "../../../shared/Container";
import img1 from "../../../assets/svg/laptop.svg";
import img2 from "../../../assets/svg/bake.svg";
import img3 from "../../../assets/svg/holiday.svg";
import img4 from "../../../assets/svg/camera.svg";

const SaveingAccount = () => {
	const acconts = [
		{
			id: 1,
			name: "New Laptop",
			price: 400,
			img: img1,
		},
		{
			id: 2,
			name: "Dream bike",
			price: 200,
			img: img2,
		},
		{
			id: 3,
			name: "Holiday",
			price: 1400,
			img: img3,
		},
		{
			id: 4,
			name: "Camera",
			price: 100,
			img: img4,
		},
	];

	return (
		<section className='px-10 py-16'>
			<Container>
				<div className='w-1/2'>
					<p>Saving Accounts</p>
					<h2 className='text-4xl py-2 font-medium'>
						Organize your <br /> money the right way
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{acconts.map(account => (
						<div className='pt-10'>
							<figure>
								<img src={account.img} alt='' className='pb-2' />
							</figure>
							<h2 className='text-lg font-medium'>{account.name}</h2>
							<p className='text-base'>{account.price} $</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default SaveingAccount;
