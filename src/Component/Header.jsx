import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
   
    return (
       <div className="navbar bg-[url('https://i.ibb.co/8n5dQmvs/15.jpg')] shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/login'>Login</NavLink>
       <NavLink to='/signin'>Signin</NavLink>
       <NavLink to='/users'>Users</NavLink>
      </ul>
    </div>
    <p className="btn btn-ghost text-xl"><img className='w-[50px] h-[40px]' src="https://i.ibb.co/hJgq3HYL/logo1.png" alt="" /></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white  px-1 gap-3">
        <NavLink to='/'>Home</NavLink>
       <NavLink to='/login'>Login</NavLink>
       <NavLink to='/signin'>Signin</NavLink>
        <NavLink to='/users'>Users</NavLink>
    </ul>
  </div>
  <div className="navbar-end">

  </div>
</div>
    );
};

export default Header;