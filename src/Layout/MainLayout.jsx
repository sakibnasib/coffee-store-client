import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[]">
      <Header></Header>

     
     <div className='bg-gradient-to-r from-green-50 to-green-100 min-h-[calc(100vh-428px)]'>
       <Outlet></Outlet>
     </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
