import React from 'react';
import { NavLink } from 'react-router';

const Add = () => {
    return (
        <div className='flex justify-center items-center m-5 text-center'>
          <div className="space-y-3"> 
            <p className='font-semibold'>--- Sip & Savor ---</p>
              <h2 className='text-[2.4rem] font-bold'>Our Popular Products</h2>
              <button className='bg-[#E3B577] p-3 border-2 rounded-full '>
                <NavLink to='/addcoffee'>Add_Coffee</NavLink>
              </button>
            
          </div>
            
        </div>
    );
};

export default Add;