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
        // ✅ FIXED LINE (added / before ${id})
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee removed successfully ☕",
                icon: "success",
                confirmButtonColor: "#6F4E37",
              });

              const remainingCoffees = coffees.filter( cof => cof._id !== id );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0] rounded-xl shadow-md p-6 flex items-center justify-between">
      <div className="w-40">
        <img src={photo} alt={name} className="w-full object-cover" />
      </div>

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

      <div className="flex flex-col gap-3">
        <Link to={`/coffee/${_id}`}>
          <button className="bg-[#D2B48C] p-3 rounded-md text-white">
            <FaEye />
          </button>
        </Link>

        <Link to={`/updatecoffee/${_id}`}>
          <button className="bg-[#3C2F2F] p-3 rounded-md text-white hover:scale-105 transition">
            <FaEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-3 rounded-md text-white hover:scale-105 transition"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
