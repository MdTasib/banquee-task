import React from "react";
import Container from "../../../shared/Container";
import services from "../../../data/services";

const Services = () => {
	return (
		<section className='pb-20'>
			<Container>
				<div className='text-center font-medium'>
					<p className='text-secondary'>Our Services</p>
					<h3 className='text-3xl leading-10'>Services For Your Health</h3>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
					{services.map(service => (
						<div class='w-full max-w-sm bg-white rounded shadow-md border-4 border-white hover:border-4 hover:border-primary p-5'>
							<div class='flex justify-between items-center'>
								<p class='text-xs font-normal'>{service.title}</p>
								{service.icon}
							</div>
							<p className='text-sm py-4'>{service.description}</p>
							<button className='hover:text-primary font-medium text-textb'>
								Explore Now
							</button>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Services;
