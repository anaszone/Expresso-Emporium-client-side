import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, chef, supplier, taste, price, details, photo } = coffee;

  return (
   
    <div className="min-h-screen bg-[#F4F3F0] py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
      
        <Link 
          to="/" 
          className="text-base md:text-lg font-serif font-bold mb-6 md:mb-8 inline-block text-[#331A15] hover:text-[#D2B48C] transition-colors"
        >
          ← Back to home
        </Link>

      
        <div className="bg-[#F4F3F1] rounded-xl shadow-xl p-6 md:p-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border border-[#D2B48C]/10">
          
        
          <div className="w-48 md:w-80 flex justify-center">
            <img 
              src={photo} 
              alt={name} 
              className="w-full h-auto object-contain drop-shadow-2xl animate__animated animate__fadeInLeft" 
            />
          </div>

          
          <div className="space-y-3 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#331A15] mb-6 border-b-2 border-[#D2B48C] pb-2 inline-block md:block">
              Coffee Niceties
            </h2>

            <div className="space-y-3 text-lg text-gray-700">
              <p>
                <span className="font-bold text-[#331A15]">Name:</span> {name}
              </p>
              <p>
                <span className="font-bold text-[#331A15]">Chef:</span> {chef}
              </p>
              <p>
                <span className="font-bold text-[#331A15]">Supplier:</span> {supplier}
              </p>
              <p>
                <span className="font-bold text-[#331A15]">Taste:</span> {taste}
              </p>
              <p>
                <span className="font-bold text-[#331A15]">Price:</span> <span className="text-[#D2B48C] font-bold">{price}</span> Taka
              </p>
              <p className="leading-relaxed">
                <span className="font-bold text-[#331A15]">Details:</span> {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;