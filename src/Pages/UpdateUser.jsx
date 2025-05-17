import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const{_id,name,photo,phone,address,age,gender}=useLoaderData()

    const handleUpdate=e=>{
         e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const upDateUser = Object.fromEntries(formData.entries());
    // send data base 
    fetch(`https://coffee-store-server-sandy-six.vercel.app/users/${_id}`,{
        method:"PUT",
        headers:{
            "content-type": "application/json", 
        },
        body:JSON.stringify(upDateUser)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
                   Swal.fire({
                             position: "top-center",
                             icon: "success",
                             title: "User Update info successfully",
                             showConfirmButton: false,
                             timer: 1500,
                           }); 
              }
    })

    }
    return (
        <div className="bg-amber-100">
      <h1 className="text-center text-5xl font-bold p-5">UpDate Data</h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              defaultValue={name}
              placeholder="Enter name"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">
              Phone Number
            </label>
            <input
              type="text"
              className="input w-full"
              name="phone"
              defaultValue={phone}
              placeholder="Enter phone number"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Address</label>
            <input
              type="text"
              className="input w-full"
              name="address"
              defaultValue={address}
              placeholder="Enter address"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Age</label>
            <input
              type="text"
              className="input w-full"
              name="age"
              defaultValue={age}
              placeholder="Enter age"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Gender</label>
            <input
              type="text"
              className="input w-full"
              name="gender"
              defaultValue={gender}
              placeholder="Enter gender"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset rounded-box p-4">
          <input
            type="submit"
            className="w-full bg-blue-600 p-2 border-2 text-white font-bold"
            value="UpDate"
          />
        </fieldset>
      </form>
    </div>
    );
};

export default UpdateUser;