import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-50 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/" className="text-4xl font-bold text-gray-900 relative">
            <span className="text-gray-600">Buy</span>
            <span className="text-indigo-500">Ever</span>
            <div className="absolute inset-0 -z-10 blur-xl opacity-20">
              <span className="text-gray-900">Buy</span>
              <span className="text-indigo-600">Ever</span>
            </div>
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            ratione. Neque mollitia non cupiditate vitae natus!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5"></p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92 342 2517550</li>
            <li>Adiltv10@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2024 @ Forever.com - All Rights Reserved.
          </p>
        </div>
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Created with <span className="text-red-600 animate-pulse">❤</span>{" "}
            <NavLink
              className={"hover:text-blue-800"}
              to={"https://github.com/Adil-Soomro"}
            >
              Adil Soomro
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
