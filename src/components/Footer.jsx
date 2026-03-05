import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#331A15] text-white pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#D2B48C]/20 pb-10">
                
                {/* Column 1: About */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-serif text-[#D2B48C]">Espresso Emporium</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Always ready to be your friend. Come & Have a cup of coffee to make your day memorable. Drink Coffee, Stay Healthy!
                    </p>
                    <div className="flex gap-4 text-2xl text-[#D2B48C]">
                        <FaFacebook className="cursor-pointer hover:text-white transition-colors" />
                        <FaTwitter className="cursor-pointer hover:text-white transition-colors" />
                        <FaInstagram className="cursor-pointer hover:text-white transition-colors" />
                        <FaLinkedin className="cursor-pointer hover:text-white transition-colors" />
                    </div>
                </div>

                {/* Column 2: Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white">Get in Touch</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li>📞 +880 123 456 789</li>
                        <li>📧 info@espresso-emporium.com</li>
                        <li>📍 123 Coffee Street, Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Column 3: Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-[#D2B48C] cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-[#D2B48C] cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-[#D2B48C] cursor-pointer">Support Center</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 text-gray-500 text-sm">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Espresso Emporium Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;