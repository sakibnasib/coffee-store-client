import React from 'react';
import { useLoaderData } from 'react-router';
import HomeCard from '../Component/HomeCard';

const AllCoffees = () => {
    const {data} =useLoaderData()
    console.log('AllCoffees component rendered!',data)
    return (
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                data.map(coffee=><HomeCard key={coffee._id} coffee={coffee}></HomeCard>)
            }
        </div>
    );
};

export default AllCoffees;