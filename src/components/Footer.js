import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return <div className="max-w-[1520px] m-auto py-2 px-4 bg-[#24262b]">
    <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
            <h1 className="w-full text-3xl font-bold text-orange-400 ">YumEats</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam atque dolores modi ullam omnis ea commodi necessitatibus pariatur? Pariatur reprehenderit suscipit praesenti</p>
            <div className="flex justify-between md:w-[75%] m-6  ">
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Location</h6>
                <ul>
                    <li className="py-2 text-sm">Nigeria</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">Ghana</li>
                    <li className="py-2 text-sm">Cameroun</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Our Partners</h6>
                <ul>
                    <li className="py-2 text-sm">Mr Bigs</li>
                    <li className="py-2 text-sm">Crunches</li>
                    <li className="py-2 text-sm">Shoprite</li>
                    <li className="py-2 text-sm">H-medix</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Wanna Know more?</h6>
                <ul>
                    <li className="py-2 text-sm">Contact Us </li>
                    <li className="py-2 text-sm">Mail</li>
                    <li className="py-2 text-sm">Fax</li>
                    <li className="py-2 text-sm">Tell</li>
                </ul>
            </div>
            
        </div>
    </div>
  </div>;
};

export default Footer;
