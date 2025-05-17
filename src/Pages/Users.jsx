import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FiEye } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
const Users = () => {
    const alUsers=useLoaderData();
    const [users,setUsers]=useState(alUsers);

    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/users/${_id}`,{
       method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
if(data.deletedCount){
    const remaingUser= users.filter(user=>user._id !==_id)
    setUsers(remaingUser)
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    
}
    })
    
  }
});
    };
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Pofile</th>
        <th>Name</th>
        <th>Address</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=> <tr key={user._id}>
        <th>{index +1 }</th>
        <th><img className='w-[55px] h-[55px] rounded-full' src={user.photo} alt="" /></th>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td> <Link to={`/UserAbout/${user._id}`}>
          <button  className="btn bg-red-600">
            <FiEye size={25} color="white" />
          </button>
        </Link>
        <Link to={`/UpdateUser/${user._id}`}>
          <button className="btn bg-red-600">
            <CiEdit size={25} color="white" />
          </button>
        </Link>
        <button onClick={()=>handleDelete(user._id)} className="btn bg-red-600">
          <MdDeleteForever size={25} color="white" />
        </button></td>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;