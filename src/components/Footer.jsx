import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#331A15] text-white pt-12 md:pt-16 pb-8">
           
            <div className="max-w-6xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-b border-[#D2B48C]/20 pb-10 text-center md:text-left">
                
                {/* Column 1: About */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <h2 className="text-3xl font-serif text-[#D2B48C]">Espresso Emporium</h2>
                    <p className="text-gray-400 leading-relaxed max-w-sm">
                        Always ready to be your friend. Come & Have a cup of coffee to make your day memorable. Drink Coffee, Stay Healthy!
                    </p>
                    <div className="flex gap-5 text-2xl text-[#D2B48C]">
                        <FaFacebook className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                        <FaTwitter className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                        <FaInstagram className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                        <FaLinkedin className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                    </div>
                </div>

                {/* Column 2: Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white">Get in Touch</h3>
                    <ul className="text-gray-400 space-y-3">
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span>📞</span> +880 123 456 789
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span>📧</span> info@espresso-emporium.com
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                            <span>📍</span> 123 Coffee Street, Dhaka, Bangladesh
                        </li>
                    </ul>
                </div>

                {/* Column 3: Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-[#D2B48C] cursor-pointer transition-colors">Privacy Policy</li>
                        <li className="hover:text-[#D2B48C] cursor-pointer transition-colors">Terms & Conditions</li>
                        <li className="hover:text-[#D2B48C] cursor-pointer transition-colors">Support Center</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 px-4 text-gray-500 text-xs md:text-sm leading-relaxed">
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by <span className="text-[#D2B48C]">Espresso Emporium Ltd.</span></p>
            </div>
        </footer>
    );
};

export default Footer;