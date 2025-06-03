import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({coffee}) => {
     const { _id, name, price, quantity, photo } = coffee
    return (
        <div className=" rounded-md shadow-md bg-gray-50 text-gray-800">
	<img src={photo} alt="" className="object-fit object-center w-full rounded-t-md h-100 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Name :{name}</h2>
			<p className="text-gray-800">Price: {price}</p>
            <p className="text-gray-800">Quantity :{quantity}</p>
		</div>
		<Link to={`/coffee/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">View more</button></Link>
	</div>
</div>
    );
};

export default HomeCard;