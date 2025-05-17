import React from "react";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
import Marquee from 'react-fast-marquee';
const Card = () => {
  return (
    <div className="bg-[#ECEAE3] p-5">
        <Marquee speed={100}>
<div className="grid grid-cols-4 w-9/12 mx-auto gap-5">
        {/*  */}
        <div className="">
          <img src={icon1} alt="" />
          <h3 className="text-xl font-semibold">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        {/*  */}
        <div className="">
          <img src={icon2} alt="" srcset="" />
          <h3 className="text-xl font-semibold">High Quality</h3>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        {/*  */}
<div className="">
          <img src={icon3} alt="" srcset="" />
          <h3 className="text-xl font-semibold">Pure Grades</h3>
          <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
        {/*  */}
        <div className="">
          <img src={icon4} alt="" srcset="" />
          <h3 className="text-xl font-semibold">Proper Roasting</h3>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
        </Marquee>
      
    </div>
  );
};

export default Card;
