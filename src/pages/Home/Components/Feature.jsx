import React from "react";
import Container from "../../../shared/Container";
import imgEx from "../../../assets/images/pose_7.png";
import features from "../../../data/features";

const Feature = () => {
	return (
		<section className='pb-20'>
			<Container>
				<div className='flex items-center flex-col lg:flex-row gap-20'>
					<div className='card basis-1/3'>
						<img src={imgEx} alt='' />
					</div>
					<div className='text-center lg:text-left basis-2/3'>
						<p className='text-secondary'>Our Hospital Feature</p>
						<h1 className='text-3xl font-medium leading-tight text-textb py-4'>
							Make An Appointment Easy And Fast <br /> Services
						</h1>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{features.map(feature => (
								<div class='w-full max-w-sm bg-white rounded shadow-md border-4 border-white hover:border-4 hover:border-primary p-5'>
									<div class='flex justify-between items-center'>
										<p class='font-normal'>{feature.title}</p>
										<img
											src={feature.img}
											alt=''
											width={50}
											className={`${feature.background} p-2 rounded-full`}
										/>
									</div>
									<p className='text-sm py-4'>{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Feature;
