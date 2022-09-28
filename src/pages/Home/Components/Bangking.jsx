import React from "react";
import Container from "../../../shared/Container";
import imgBank from "../../../assets/images/app.jpg";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";
import icon4 from "../../../assets/icons/icon4.png";
import icon5 from "../../../assets/icons/icon5.png";
import icon6 from "../../../assets/icons/icon6.png";

const Bangking = () => {
	const bankingData = [
		{
			id: 1,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon1,
		},
		{
			id: 2,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon2,
		},
		{
			id: 3,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon3,
		},
		{
			id: 4,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon4,
		},
		{
			id: 5,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon5,
		},
		{
			id: 6,
			title: "Instant transactions",
			description:
				"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
			icon: icon6,
		},
	];

	return (
		<section className='p-10'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className=''>
						<h2 className='text-4xl font-medium'>
							One app. <br />
							One banking.
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-10'>
							{bankingData.map(data => (
								<div className='card border'>
									<div className='card-body p-5'>
										<figure className='mr-auto bg-[#E8F2EE] p-2 rounded-full'>
											<img src={data.icon} alt='Shoes' />
										</figure>
										<h2 className='text-lg font-bold'>{data.title}</h2>
										<p className='text-base'>{data.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<img src={imgBank} className='m-auto' width={250} alt='' />
				</div>
			</Container>
		</section>
	);
};

export default Bangking;
