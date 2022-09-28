import React from "react";
import {
	FaFacebook,
	FaGoogle,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../shared/Container";

const Footer = () => {
	return (
		<footer className='bg-[#E9EEF7]'>
			<Container>
				<div className='footer py-10'>
					<div>
						<Link to='/' className='font-bold text-base'>
							<span className='text-primary'>Doc</span>
							<span className='text-secondary'>mic</span>
						</Link>
						<p className='pb-10'>
							Simply dummy text of the <br /> printing and typesetting industry.{" "}
							<br /> Lorem Ipsum has bee
						</p>
						<div className='flex gap-4'>
							<FaFacebook
								size={35}
								className='border-2 p-1 border-gray-300 rounded-full'
								color='#2D89FF'
							/>
							<FaInstagram
								size={35}
								className='border-2 p-1 border-gray-300 rounded-full'
								color='#2D89FF'
							/>
							<FaGoogle
								size={35}
								className='border-2 p-1 border-gray-300 rounded-full'
								color='#2D89FF'
							/>
							<FaTwitter
								size={35}
								className='border-2 p-1 border-gray-300 rounded-full'
								color='#2D89FF'
							/>
							<FaYoutube
								size={35}
								className='border-2 p-1 border-gray-300 rounded-full'
								color='#2D89FF'
							/>
						</div>
					</div>
					<div>
						<span className='text-secondary text-sm font-medium'>
							Quick Links
						</span>
						<a className='link link-hover'>About Us</a>
						<a className='link link-hover'>Our Classes</a>
						<a className='link link-hover'>School Teachers</a>
						<a className='link link-hover'>Our News</a>
						<a className='link link-hover'>Schedule</a>
					</div>
					<div>
						<span className='footer-title pb-3'></span>
						<a className='link link-hover'>Branding</a>
						<a className='link link-hover'>Design</a>
						<a className='link link-hover'>Marketing</a>
						<a className='link link-hover'>Advertisement</a>
					</div>
					<div className='text-sm'>
						<span className='text-secondary text-sm font-medium'>
							Opening Hours
						</span>
						<p>
							<span className='text-primary'>Mon- Tue</span>
							<span className='pl-10'>08:00 AM- 05:00 PM</span>
						</p>
						<p>
							<span className='text-primary'>Wed- Thu</span>
							<span className='pl-10'>09:00 AM- 06:00 PM</span>
						</p>
						<p>
							<span className='text-primary'>Fri- Sat</span>
							<span className='pl-10'>10:00 AM- 07:00 PM</span>
						</p>
						<p>
							<span className='text-primary'>Sunday</span>
							<span className='pl-10'>Emergency Only</span>
						</p>
						<p>
							<span className='text-primary'>Personal</span>
							<span className='pl-10'>Mon- 05:00 PM</span>
						</p>
					</div>
				</div>
				<div className='footer py-4'>
					<p>
						Copyright @ {new Date().getFullYear()} Medicom All Rights Reserved
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
