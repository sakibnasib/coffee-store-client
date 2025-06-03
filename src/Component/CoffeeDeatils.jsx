import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
 import { AuthContex } from '../Provider/AuthProvider'
import Swal from 'sweetalert2';
import axios from 'axios';
const CoffeeDeatils = () => {
    const {user}=use(AuthContex);
    const {data}=useLoaderData();
    console.log(user)
     const [coffee, setCoffee] = useState(data)
  const { name, photo, details, _id, email, quantity, likedBy } = coffee || {};
  const [liked,setLiked]=useState(likedBy.includes(user.email));
  const [likedCount,setLikedCound]=useState(likedBy.length)
  console.log("hh:",liked)
  // like/disliked
  const handleLike=()=>{
if(user.email=== email)return Swal.fire("You can not Liked You Own Post!");
  // 
  axios.patch(`${import.meta.env.VITE_API_URL}/like/${_id}`,{email:user?.email})
.then(data=>{
  console.log(data?.data)
   const isLiked = data?.data?.liked
        // update liked state
        setLiked(isLiked)

        // update likeCount State
        setLikedCound(prev => (isLiked ? prev + 1 : prev - 1))
}).catch((err) => {
      console.error("Error liking coffee:", err);
    });
  };
  const handleOrder=()=>{
if(user.email=== email)return Swal.fire("You can not Order You Own Post Coffee!");
const  orderInfo={
coffeeId: _id,
customerEmail: user?.email,
};
axios.post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`, orderInfo)
.then(data=>{
 console.log(data)
    Swal.fire({
           title: 'Good job!',
           text: 'Data Added Successfully',
           icon: 'success',
   })
   setCoffee(prev=>{
    return {...prev,quantity:prev.quantity -1}
   })
}).catch(err=>{
  console.log(err)
})
  }
    return (
        <div>
      <div className='flex flex-col md:flex-row justify-around items-center py-5 gap-5'>
        <div className='flex-1'>
          <img className='w-full' src={photo} alt='' />
        </div>
        <div className='flex-1'>
          <p>Name: {name}</p>
          <p>Details: {details}</p>
          <p>Quantity: {quantity}</p>
          <p>Likes: {likedCount}</p>

          <div className='flex gap-4'>
            <button onClick={handleOrder} className='btn btn-primary'>
              Order
            </button>
            <button onClick={handleLike} className='btn btn-secondary'>
              👍 {liked ? 'Liked' : 'Like'}
            </button>
          </div>
        </div>
      </div>
    </div>
             

    );
};

export default CoffeeDeatils;