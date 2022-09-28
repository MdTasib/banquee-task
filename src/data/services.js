import { FaHeartbeat, FaClipboardCheck } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { BsFillBagPlusFill } from "react-icons/bs";

const services = [
	{
		id: 1,
		icon: <FaHeartbeat color='#642DFF' size={30} />,
		description: "Seduahag perspiciati under omnised atused error.",
		title: "Cardiology",
	},
	{
		id: 2,
		icon: <FaClipboardCheck color='#2D42FF' size={30} />,
		description: "Seduahag perspiciati under omnised atused error.",
		title: "Monthly Check Up",
	},
	{
		id: 3,
		icon: <TbDental color='#2DA7FF' size={30} />,
		description: "Seduahag perspiciati under omnised atused error.",
		title: "Dental Care",
	},
	{
		id: 4,
		icon: <BsFillBagPlusFill color='#FF532D' size={30} />,
		description: "Seduahag perspiciati under omnised atused error.",
		title: "Opthalmology",
	},
];

export default services;
