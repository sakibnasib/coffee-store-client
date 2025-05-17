import React from 'react';
import { Link, useLocation } from 'react-router';
import error from '../assets/404.gif'
const Error = () => {
    const location=useLocation();
    const message=location?.pathname
    return (
        <div className='flex flex-col justify-center items-center '>
             <img src={error} alt="" />
             <p className="text-red-600 font-bold text-[2.3rem]">
          {" "}
          we cannot fount this : <span>{message}</span>
        </p>
         <Link
          to="/"
          className="btn btn-wide bg-[#0EA106] text-white w-full rounded-3xl mt-2 "
        >
          Go Back Home
        </Link>
        </div>
    );
};

export default Error;