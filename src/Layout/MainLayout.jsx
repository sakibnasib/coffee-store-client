import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[] w-10/12 mx-auto">
      <Header></Header>

     
     <div className=' min-h-[calc(100vh-428px)]'>
       <Outlet></Outlet>
     </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
