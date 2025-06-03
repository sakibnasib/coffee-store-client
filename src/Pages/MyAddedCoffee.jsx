import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../Component/CoffeeCard';

const MyAddedCoffee = () => {
     const {data}=useLoaderData();
    const[coffees,setCoffees]=useState(data)
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 mb-5">
                {coffees.map(coffee=><CoffeeCard key={coffee._id}
                coffees={coffees}
                setCoffees={setCoffees}
                coffee={coffee}></CoffeeCard>)}
            </div>
        </div>
    );
};

export default MyAddedCoffee;