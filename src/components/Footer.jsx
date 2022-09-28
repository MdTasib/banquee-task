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
		<footer className=''>
			<Container>
				<div className='footer py-10'>
					<div>
						<Link to='/' className='font-bold text-2xl text-primary'>
							banquee.
						</Link>
					</div>
					<div>
						<span className='text-sm font-medium'>About</span>
						<a className='link link-hover text-sm'>Features</a>
						<a className='link link-hover text-sm'>Priceing</a>
						<a className='link link-hover text-sm'>Support</a>
					</div>
					<div>
						<span className='text-sm font-medium'>Blog</span>
						<a className='link link-hover text-sm'>Products</a>
						<a className='link link-hover text-sm'>Technology</a>
						<a className='link link-hover text-sm'>Crypto</a>
					</div>
					<div>
						<span className='text-sm font-medium'>Webflow</span>
						<a className='link link-hover text-sm'>Styleguide</a>
						<a className='link link-hover text-sm'>Licensing</a>
						<a className='link link-hover text-sm'>Changelog</a>
					</div>
					<div>
						<span className='text-sm font-medium'>Social Media</span>
						<a className='link link-hover text-sm'>Twitter</a>
						<a className='link link-hover text-sm'>Facebook</a>
						<a className='link link-hover text-sm'>Instagram</a>
					</div>
				</div>
				<div className='footer py-4 border-t-2'>
					<p>
						Copyright @ {new Date().getFullYear()} Medicom All Rights Reserved
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
