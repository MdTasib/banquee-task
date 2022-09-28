import React from "react";
import Container from "../../../shared/Container";
import headerImg from "../../../assets/images/header-img.png";
import Button from "../../../shared/Button";
import { FcCheckmark } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
	const infos = [
		{
			id: 1,
			title: "Instant Transfer",
		},
		{
			id: 2,
			title: "Payments worldwide",
		},
		{
			id: 3,
			title: "Saving accounts",
		},
		{
			id: 4,
			title: "100% mobile banking",
		},
	];

	return (
		<header className='px-10 py-20 hero h-full'>
			<Container>
				<div className='flex items-center flex-col lg:flex-row gap-20'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-medium'>
							Banking <br /> starts here.
						</h1>
						<p className='py-3 text-base'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore.
						</p>
						<div className='grid grid-cols-2 pb-4'>
							{infos.map(info => (
								<div key={info.id} className='flex items-center my-2'>
									<small className='bg-[#E8F2EE] rounded-full p-1 mr-2'>
										<FcCheckmark size={12} />
									</small>
									<small>{info.title}</small>
								</div>
							))}
						</div>
						<div className='flex'>
							<Button>Open Account</Button>
							<NavLink to='/' className='ml-4 text-primary flex items-center'>
								Compare Cards{" "}
								<span className='ml-2'>
									<FaArrowRight size={14} />
								</span>
							</NavLink>
						</div>
					</div>
					<div className='card w-full max-w-sm'>
						<img src={headerImg} alt='' className='max-w-sm' width={250} />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
