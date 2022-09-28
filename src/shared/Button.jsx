import React from "react";

const Button = ({ children }) => {
	return (
		<button className='btn btn-sm btn-primary rounded text-white'>
			{children}
		</button>
	);
};

export default Button;
