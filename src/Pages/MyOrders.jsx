import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import axios from "axios";
import OrderCard from "../Component/OrderCard";

const MyOrders = () => {
  const { user } = use(AuthContex);
  const [orders, setOrders] = useState([]);
  console.log(orders)
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`)
 .then(data=>{
    setOrders(data?.data)
 }).catch(err=>{
    console.log(err)
 })
}, [user]);
  return <div>
    {
     orders.map(coffee=><OrderCard key={coffee._id} coffee={coffee} />)   
    }
  </div>;
};

export default MyOrders;
