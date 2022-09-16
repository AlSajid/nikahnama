import React from "react";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlineManageSearch } from "react-icons/md";
import hands from "../images/hands.jpg";
import Header from "./NikahInfo/Header";
import { SiBlockchaindotcom } from "react-icons/si";

const NikahNama = () => {
  return (
    <div>
      <Header />

      <div
        className="flex container border mx-auto py-5 flex-wrap justify-evenly h-1/2 bg-slate-50 bg-bottom "
        // style={{ backgroundImage: `url(${hands})`, backgroundSize: "cover" }}
      >
        <div className="w-1/2">
          <h1>Hello World</h1>
        </div>
        <Link to="/register">
          <div className="border w-full p-5 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
            <div className="p-5">
              <BiBookAdd className="text-5xl mx-auto" />
            </div>
            <h2 className="text-center">বিবাহ নিবন্ধন করুন</h2>
          </div>
        </Link>

        <Link to="/search">
          <div className="border w-full p-5 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
            <div className="p-5">
              <MdOutlineManageSearch className="text-5xl mx-auto" />
            </div>
            <h2 className="text-center">নিবন্ধন যাচাই করুন</h2>
          </div>
        </Link>

        <Link to="/blockchain">
          <div className="border w-full p-5 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
            <div className="p-5">
              <SiBlockchaindotcom className="text-5xl mx-auto" />
            </div>
            <h2 className="text-center">ব্লকচেইন</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NikahNama;
