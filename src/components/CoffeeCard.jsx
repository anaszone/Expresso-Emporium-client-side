import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `This coffee "${name}" will be removed ☕`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6F4E37",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#fff8f0",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee removed successfully ☕",
                icon: "success",
                confirmButtonColor: "#6F4E37",
              });

              const remainingCoffees = coffees.filter((cof) => cof._id !== id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    
    <div className="bg-[#F4F3F0] rounded-xl shadow-md p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 transition-all hover:shadow-lg border border-transparent hover:border-[#D2B48C]/30">
      
     
      <div className="w-32 md:w-40 flex justify-center">
        <img src={photo} alt={name} className="w-full h-auto object-contain drop-shadow-xl" />
      </div>

     
      <div className="flex-1 md:px-8 space-y-2 text-center md:text-left w-full">
        <h2 className="text-lg md:text-xl text-[#331A15]">
          <span className="font-bold">Name:</span> {name}
        </h2>
        <p className="text-lg text-gray-600">
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>

     
      <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto justify-center">
        <Link to={`/coffee/${_id}`} className="flex-1 md:flex-none">
          <button className="bg-[#D2B48C] p-3 rounded-md text-white hover:bg-[#b89a74] transition w-full flex justify-center">
            <FaEye />
          </button>
        </Link>

        <Link to={`/updatecoffee/${_id}`} className="flex-1 md:flex-none">
          <button className="bg-[#3C2F2F] p-3 rounded-md text-white hover:scale-105 transition w-full flex justify-center">
            <FaEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-3 rounded-md text-white hover:scale-105 transition flex-1 md:flex-none flex justify-center"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;