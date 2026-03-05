import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-[#F4F3F0] flex flex-col items-center justify-center p-4 md:p-6 text-center">
          
            <div className="text-7xl md:text-9xl mb-4 animate-bounce">
                ☕
            </div>

          
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#331A15] mb-4">
                404
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                Oops! Page Not Found
            </h2>
            
           
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-xs md:max-w-md px-2">
                Sorry, the coffee you're looking for isn't on our menu today. 
                Maybe it's still brewing!
            </p>

            
            {error && (
                <div className="max-w-xs md:max-w-md mb-10 overflow-hidden">
                    <p className="text-red-400 italic text-sm bg-red-50 px-4 py-2 rounded-lg border border-red-100 break-words">
                        {error.statusText || error.message}
                    </p>
                </div>
            )}

           
            <Link to="/" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-[#D2B48C] hover:bg-[#331A15] text-[#331A15] hover:text-[#D2B48C] font-serif text-lg md:text-xl px-8 md:px-10 py-3 rounded-md border-2 border-[#331A15] transition-all duration-300 shadow-md active:scale-95">
                    Back to Home
                </button>
            </Link>

           
            <div className="mt-12 md:mt-16 opacity-10 pointer-events-none">
                <img 
                    src="https://i.ibb.co/3yS3vN1/coffee-beans.png" 
                    alt="coffee beans" 
                    className="w-24 md:w-40 mx-auto"
                />
            </div>
        </div>
    );
};

export default ErrorPage;