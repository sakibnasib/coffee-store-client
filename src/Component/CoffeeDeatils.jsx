import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDeatils = () => {
    const coffee=useLoaderData();
    const{name,quantity,supplier,taste,price,details,photo}=coffee
    return (
        <div className='bg-[#F4F3F0] p-5 rounded-lg shadow-2xl'>
            <div className="flex  justify-around items-center">
                <img src={photo} alt="" />
                <div className="space-y-3">
           <h2><span className='font-semibold'>NAme:</span> {name}</h2>
           <p><span className='font-semibold'>Quantity:</span> {quantity}</p>
           <p><span className='font-semibold'>Supplier:</span> {supplier}</p>
           <p><span className='font-semibold'>Taste:</span> {taste}</p>
           <p><span className='font-semibold'>Price:</span>{price}</p>
           <p> <span className='font-semibold'> Deatails:</span>{details}</p>
            </div>
            </div>
             
        </div>
    );
};

export default CoffeeDeatils;