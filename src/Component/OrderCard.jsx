import axios from 'axios';
import React from 'react';

const OrderCard = ({coffee}) => {
     const { _id, name, price, quantity, photo,coffeeId } = coffee;
     const handleCancleOrder=()=>{
        console.log('or id',_id)
        console.log('co',coffeeId)
        axios.delete(`${import.meta.env.VITE_API_URL}/cancleOrder/${_id}`,{data: { coffeeId }})
        .then(data=>{
            console.log(data)
        }).catch(err=>console.log(err))
     }
    return (
         <div className='card card-side bg-base-100 shadow-sm border-2'>
      <figure>
        <img src={photo} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
            <button onClick={handleCancleOrder} className='btn join-item'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OrderCard;