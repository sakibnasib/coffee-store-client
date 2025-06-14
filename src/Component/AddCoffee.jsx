import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";

const AddCoffee = () => {
  const  navigate=useNavigate()
  const {user}=use(AuthContex);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    newCoffee.email=user.email 
    newCoffee.likedBy=[]
    axios.post(`${import.meta.env.VITE_API_URL}/add-coffee`,newCoffee)
    .then(res=>{
      console.log(res)
       Swal.fire({
          title: 'Good job!',
          text: 'Data Added Successfully',
          icon: 'success',
        })
        navigate('/')
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className="bg-[#F4F3F0] p-20">
      <div className="text-center space-y-3">
        <h2 className="text-[3rem] ">Add New Coffee</h2>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Name</label>
            <input
              type="text"
              className="input w-full "
              name="name"
              placeholder="Enter coffee name"
            />
          </fieldset>
          {/* 2 */}
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Quantity</label>
            <input
              type="text"
              className="input w-full "
              name="quantity"
              placeholder="Enter coffee quantity"
            />
          </fieldset>
          {/* 3 */}
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Supplier</label>
            <input
              type="text"
              className="input w-full "
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          {/* 4 */}
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Taste</label>
            <input
              type="text"
              className="input w-full "
              name="taste"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          {/* 5 */}
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Price</label>
            <input
              type="text"
              className="input w-full "
              name="price"
              placeholder="Enter coffee price"
            />
          </fieldset>
          {/* 6 */}
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Details</label>
            <input
              type="text"
              className="input w-full "
              name="details"
              placeholder="Enter coffee details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset   rounded-box   p-4">
          <label className="label font-semibold text-black">Photo</label>
          <input
            type="text"
            className="input w-full "
            name="photo"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <fieldset className="fieldset   rounded-box   p-4">
          <input
            type="submit"
            className="w-full bg-[#D2B48C] p-2 border-2"
            value="Add Coffee"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddCoffee;
