import React from "react";
import { Link } from "react-router";
import { FiEye } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee ,coffees,setCoffees}) => {
  const { _id, name, photo, price, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-sandy-six.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee Data deleted.",
                icon: "success",
              });
              const remainingCoffees=coffees.filter(cof=>cof._id !== _id)
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-around items-center rounded-2xl shadow-2xl  bg-[#F5F4F1]">
      <img src={photo} alt="" />
      <div className="space-y-5">
        <h2>Name: {name}</h2>
        <p>Price : {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className=" flex flex-col gap-3">
        <Link to={`/coffee/${_id}`}>
          <button className="btn bg-red-600">
            <FiEye size={25} color="white" />
          </button>
        </Link>
        <Link to={`upDateCoffee/${_id}`}>
          <button className="btn bg-red-600">
            <CiEdit size={25} color="white" />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">
          <MdDeleteForever size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
