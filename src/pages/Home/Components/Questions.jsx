import React, { Fragment, useState } from "react";
import Container from "../../../shared/Container";
import imgEx from "../../../assets/images/pose_8.png";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from "@material-tailwind/react";

const Questions = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = value => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

	return (
		<section className='pb-20'>
			<Container>
				<div className='flex items-center flex-col lg:flex-row gap-20'>
					<div className='text-center lg:text-left basis-2/3'>
						<p className='text-secondary'>FAQ Questions</p>
						<h1 className='text-3xl font-medium leading-tight text-textb py-4'>
							Get Your General Answer
						</h1>

						<Fragment>
							<Accordion open={open === 1} animate={customAnimation}>
								<AccordionHeader
									className='text-base border-0'
									onClick={() => handleOpen(1)}>
									Get Your General Answer?
								</AccordionHeader>
								<AccordionBody>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</Accordion>
							<Accordion open={open === 2} animate={customAnimation}>
								<AccordionHeader
									className='text-base border-0'
									onClick={() => handleOpen(2)}>
									Will I always see my own doctor?
								</AccordionHeader>
								<AccordionBody>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</Accordion>
							<Accordion open={open === 3} animate={customAnimation}>
								<AccordionHeader
									className='text-base border-0'
									onClick={() => handleOpen(3)}>
									What is one Medical’s care?
								</AccordionHeader>
								<AccordionBody>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</Accordion>
							<Accordion open={open === 4} animate={customAnimation}>
								<AccordionHeader
									className='text-base border-0'
									onClick={() => handleOpen(4)}>
									What is evidence based medicine?
								</AccordionHeader>
								<AccordionBody>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</Accordion>
						</Fragment>
					</div>
					<div className='card basis-1/3'>
						<img src={imgEx} alt='' />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Questions;
