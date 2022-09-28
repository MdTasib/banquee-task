import React from "react";
import Container from "../../../shared/Container";
import imgEx from "../../../assets/images/pose_4.png";

const Experiences = () => {
	return (
		<section className='pb-20'>
			<Container>
				<div className='flex items-center flex-col lg:flex-row gap-20'>
					<div className='text-center lg:text-left basis-2/3'>
						<p className='text-secondary'>16+ Years Experiences</p>
						<h1 className='text-3xl font-medium leading-tight text-textb py-4'>
							We Are Always ensure Best Medical <br /> Treatment For Your Health
						</h1>
						<p className='text-paragraph1'>
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look lik
						</p>
					</div>
					<div className='card basis-1/3'>
						<img src={imgEx} alt='' />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Experiences;
