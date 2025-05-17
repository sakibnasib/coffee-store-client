import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import Banner from './Banner';
import Add from './Add';
import Card from './Card';


const Home = () => {
    const initialCoffees=useLoaderData();
    const[coffees,setCoffees]=useState(initialCoffees)
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <Card></Card>
            <Add></Add>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-11/12 mx-auto md:p-5">
            {
            coffees.map(coffee=><CoffeeCard key={coffee._id}
                coffees={coffees}
                setCoffees={setCoffees}
                 coffee={coffee}>

                 </CoffeeCard>)
           }
           </div>
          
        </div>
    );
};

export default Home;