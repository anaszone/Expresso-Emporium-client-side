import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    console.log("anas");

    Swal.fire({
    title: "Are you sure?",
    text: "This coffee will be removed from menu ☕",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6F4E37",   // coffee brown color
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    background: "#fff8f0",          // coffee cream background
  }).then((result) => {

    if (result.isConfirmed) {

      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {

            Swal.fire({
              title: "Deleted!",
              text: "Coffee removed successfully ☕",
              icon: "success",
              confirmButtonColor: "#6F4E37",
            });

            // UI update state
            // const remaining = users.filter(u => u._id !== id);
            // setUsers(remaining);
          }

        });

    }

  });



    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] rounded-xl shadow-md p-6 flex items-center justify-between">
      {/* Left Image */}
      <div className="w-40">
        <img src={photo} alt={name} className="w-full object-cover" />
      </div>

      {/* Middle Info */}
      <div className="flex-1 px-6 space-y-2">
        <h2 className="text-lg">
          <span className="font-bold">Name:</span> {name}
        </h2>
        <p className="text-lg">
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p className="text-lg">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-col gap-3">
        <button className="bg-[#D2B48C] p-3 rounded-md text-white hover:scale-105 transition">
          <FaEye />
        </button>

        <button className="bg-[#3C2F2F] p-3 rounded-md text-white hover:scale-105 transition">
          <FaEdit />
        </button>

        <button  onClick={() => handleDelete(_id)} className="bg-[#EA4744] p-3 rounded-md text-white hover:scale-105 transition">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
