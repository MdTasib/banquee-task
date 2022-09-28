import React from "react";
import Container from "../../../shared/Container";
import client1 from "../../../assets/svg/client1.svg";
import client2 from "../../../assets/svg/client2.svg";
import client3 from "../../../assets/svg/client3.svg";
import client4 from "../../../assets/svg/client4.svg";
import client5 from "../../../assets/svg/client5.svg";
import client6 from "../../../assets/svg/client6.svg";
import client7 from "../../../assets/svg/client7.svg";
import client8 from "../../../assets/svg/client8.svg";
import { GrFormCheckmark } from "react-icons/gr";

const Client = () => {
	const infos = [
		{
			id: 1,
			title: "Secure and encrypted integration",
		},
		{
			id: 2,
			title: "Fully API interface",
		},
		{
			id: 3,
			title: "Payments worldwide",
		},
	];

	return (
		<section className='px-10 py-16'>
			<Container>
				<div className='flex flex-wrap gap-4 w-1/2'>
					<img src={client1} alt='' />
					<img src={client2} alt='' />
					<img src={client3} alt='' />
					<img src={client4} alt='' />
					<img src={client5} alt='' />
					<img src={client6} alt='' />
					<img src={client7} alt='' />
					<img src={client8} alt='' />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 items-center pt-10'>
					<div className=''>
						<div className='content'>
							<p className='text-base'>Tools</p>
							<h2 className='text-4xl font-medium'>
								Seemless <br /> integration
							</h2>
							<p className='text-base py-2'>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</div>
					</div>
					<div className='m-auto'>
						{infos.map(info => (
							<div key={info.id} className='flex items-center my-2'>
								<small className='bg-[#E8F2EE] rounded-full p-1 mr-2'>
									<GrFormCheckmark color='green' size={12} />
								</small>
								<small>{info.title}</small>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Client;
