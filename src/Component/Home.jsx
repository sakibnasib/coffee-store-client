import React from 'react';
import CoffeeCard from './CoffeeCard';
import Banner from './Banner';
import Add from './Add';
import Card from './Card';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import HomeCard from './HomeCard';


const Home = () => {
    // const initialCoffees=useLoaderData();
    // const[coffees,setCoffees]=useState(initialCoffees)
     const data = useLoaderData()
  const [coffees, setCoffees] = useState(data?.data || [])
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <Card></Card>
            <Add></Add>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-11/12 mx-auto md:p-5">
           {
coffees.map(coffee=><HomeCard key={coffee._id} coffee={coffee}></HomeCard>)
           }
           </div>
          
        </div>
    );
};

export default Home;