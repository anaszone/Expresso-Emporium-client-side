import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="bg-cover bg-center py-20 px-4">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-gray-600 italic mb-2">--- Sip & Savor ---</p>

        <h2 className="text-4xl font-bold text-[#331A15] mb-4">
          Our Popular Products
        </h2>

        <Link to="/addCoffee">
          <button className="bg-[#D2B48C] hover:bg-[#c49a6c] text-black font-semibold px-6 py-2 rounded-md shadow-md transition">
            Add Coffee ☕
          </button>
        </Link>
      </div>

      {/* Coffee Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id}
          coffees = {coffees}
          setCoffees = {setCoffees}
           coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
