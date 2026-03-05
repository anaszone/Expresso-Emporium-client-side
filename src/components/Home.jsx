import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "./Banner";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      <Banner />

      <div className="bg-white py-20 px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gray-600 italic mb-2">--- Sip & Savor ---</p>
          <h2 className="text-4xl font-bold text-[#331A15] mb-4 font-serif">
            Our Popular Products
          </h2>
          <Link to="/addCoffee">
            <button className="bg-[#E3B577] border-2 border-[#331A15] hover:bg-[#331A15] hover:text-white text-[#331A15] font-serif px-6 py-2 rounded-md shadow-md transition-all">
              Add Coffee ☕
            </button>
          </Link>
        </div>

        {/* Coffee Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
