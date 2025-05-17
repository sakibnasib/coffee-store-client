import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpDateCoffee = () => {
    const {_id,name,quantity,supplier,taste,price,details,photo}=useLoaderData();
 const handleUpdate=e=>{
     e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const upDateCoffee = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/coffees/${_id}`,{
        method:"PUT",
        headers:{
             "content-type": "application/json",
        },
        body:JSON.stringify( upDateCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
             Swal.fire({
                       position: "top-center",
                       icon: "success",
                       title: "Coffee Update successfully",
                       showConfirmButton: false,
                       timer: 1500,
                     }); 
        }
    })
 }
    return (
        <div className="bg-[#F4F3F0] p-20">
      <div className="text-center space-y-3">
        <h2 className="text-[3rem] ">UpDate Coffee Data</h2>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <fieldset className="fieldset   rounded-box   p-4">
            <label className="label font-semibold text-black">Name</label>
            <input
              type="text"
              className="input w-full "
              name="name"
              defaultValue={name}
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
              defaultValue={quantity}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={price}
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
              defaultValue={details}
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
            defaultValue={photo}
            placeholder="Enter photo URL"
          />
        </fieldset>
        <fieldset className="fieldset   rounded-box   p-4">
          <input
            type="submit"
            className="w-full bg-[#D2B48C] p-2 border-2"
            value="UpDate Coffee"
          />
        </fieldset>
      </form>
    </div>
    );
};

export default UpDateCoffee;