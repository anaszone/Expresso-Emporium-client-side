import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "./Banner";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="overflow-x-hidden"> 
      <Banner />

    
      <div className="bg-white py-10 md:py-20 px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 px-2">
          <p className="text-gray-600 italic mb-2 text-sm md:text-base">--- Sip & Savor ---</p>
          
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#331A15] mb-6 font-serif leading-tight">
            Our Popular Products
          </h2>
          
          <Link to="/addCoffee">
            <button className="bg-[#E3B577] border-2 border-[#331A15] hover:bg-[#331A15] hover:text-white text-[#331A15] font-serif px-6 py-2 rounded-md shadow-md transition-all active:scale-95 text-sm md:text-base">
              Add Coffee ☕
            </button>
          </Link>
        </div>

       
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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