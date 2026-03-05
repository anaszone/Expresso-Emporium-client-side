import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[400px] md:h-[600px] flex items-center justify-center md:justify-end md:pr-40 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/S7QZcmDF/image.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>

      <div className="relative z-10 max-w-xl text-center md:text-left text-white px-6 md:px-0">
      
        <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
          Would you like a Cup of Delicious Coffee?
        </h1>
        
     
        <p className="mb-6 text-gray-200 text-sm md:text-lg">
          It's coffee time - enjoy the magic of every sip! Take a break from the
          hustle and bustle of life and relax with our premium espresso blends.
        </p>

       
        <button className="bg-[#D2B48C] text-[#331A15] px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl font-serif hover:bg-transparent hover:text-[#D2B48C] hover:border-[#D2B48C] border-2 border-transparent transition-all active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;