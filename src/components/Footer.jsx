import card from '../assets/card.png';
import React from 'react';
import { Home, Info, DollarSign, HelpCircle, Phone, FileText, MapPin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className=" text-white p-6">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h1 className="text-2xl font-bold flex items-center mb-4">
                        <span className="text-teal-400 mr-2">MONA</span>
                        <span>AI</span>
                    </h1>
                    <p className="text-sm mb-4">
                        We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold mb-2">Quick links</h2>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><Home size={14} className="mr-1" /> Home</a></li>
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><Info size={14} className="mr-1" /> About us</a></li>
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><DollarSign size={14} className="mr-1" /> Pricing</a></li>
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><HelpCircle size={14} className="mr-1" /> FAQ</a></li>
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><Phone size={14} className="mr-1" /> Contact</a></li>
                        <li><a href="#" className="hover:text-teal-400 flex items-center"><FileText size={14} className="mr-1" /> Terms and Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold mb-2">Tools</h2>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-teal-400">AI Video Subtitles</a></li>
                        <li><a href="#" className="hover:text-teal-400">YouTube Translation</a></li>
                        <li><a href="#" className="hover:text-teal-400">Youtube Watch</a></li>
                        <li><a href="#" className="hover:text-teal-400">Images Generation</a></li>
                        <li><a href="#" className="hover:text-teal-400">AI Assistant</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold mb-2">Get in touch</h2>
                    <ul className="space-y-1 text-sm">
                        <li className="flex items-center"><MapPin size={14} className="mr-1" /> Times Square Office Building</li>
                        <li className="flex items-center"><Mail size={14} className="mr-1" /> info@mona-ai.mn</li>
                        <li className="flex items-center"><Phone size={14} className="mr-1" /> +976</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">Copyright © 2024 MAZAI.AI . All rights reserved.</p>
                <div className="flex space-x-2">
                    <img src={card} alt="Apple Pay" className="h-5" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;