import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-[#F4F3F0] flex flex-col items-center justify-center p-6 text-center">
            {/* Simple Coffee Cup Icon or Text Based Logo */}
            <div className="text-9xl mb-4 animate-bounce">
                ☕
            </div>

            <h1 className="text-6xl font-serif font-bold text-[#331A15] mb-4">
                404
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Oops! Page Not Found
            </h2>
            
            <p className="text-gray-500 mb-8 max-w-md">
                Sorry, the coffee you're looking for isn't on our menu today. 
                Maybe it's still brewing!
            </p>

            {/* Error Message (Technical Info) */}
            {error && (
                <p className="text-red-400 italic mb-10 bg-red-50 px-4 py-2 rounded-lg border border-red-100">
                    {error.statusText || error.message}
                </p>
            )}

            {/* Back to Home Button */}
            <Link to="/">
                <button className="bg-[#D2B48C] hover:bg-[#331A15] text-[#331A15] hover:text-[#D2B48C] font-serif text-xl px-10 py-3 rounded-md border-2 border-[#331A15] transition-all duration-300 shadow-md">
                    Back to Home
                </button>
            </Link>

            {/* Decorative Element */}
            <div className="mt-16 opacity-10 pointer-events-none">
                <img 
                    src="https://i.ibb.co/3yS3vN1/coffee-beans.png" 
                    alt="coffee beans" 
                    className="w-40"
                />
            </div>
        </div>
    );
};

export default ErrorPage;