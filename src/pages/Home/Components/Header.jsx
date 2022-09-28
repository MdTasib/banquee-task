import React from "react";
import Container from "../../../shared/Container";
import headerImg from "../../../assets/images/pose_2.png";
import Button from "../../../shared/Button";

const Header = () => {
	const infos = [
		{
			id: 1,
			count: "262k+",
			title: "Recovered Patients",
		},
		{
			id: 2,
			count: "96%",
			title: "Satisfaction Rate",
		},
		{
			id: 3,
			count: "86+",
			title: "Expert Doctors",
		},
	];

	return (
		<header className='bg-[#F7F7F7] px-10 py-20 hero h-full'>
			<Container>
				<div className='flex items-center flex-col lg:flex-row gap-20'>
					<div className='text-center lg:text-left'>
						<h1 className='text-6xl font-medium leading-tight text-textb'>
							Your <span className='text-primary'>Health</span> Is Our Top
							<span className='text-secondary'> Priority</span>
						</h1>
						<p className='py-6 text-paragraph1'>
							There are many variations of passages of lpsum available, but the
							majority hae suffered.
						</p>
						<Button>Meet Our Specialist</Button>
						<div className='grid grid-cols-3 py-10'>
							{infos.map(info => (
								<div key={info.id}>
									<h2 className='text-secondary font-bold text-3xl'>
										{info.count}
									</h2>
									<small>{info.title}</small>
								</div>
							))}
						</div>
					</div>
					<div className='card w-full max-w-sm'>
						<img
							src={headerImg}
							alt=''
							className='max-w-sm rounded-lg shadow-2xl'
						/>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
