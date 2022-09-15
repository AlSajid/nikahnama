import React from "react";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlineManageSearch } from "react-icons/md";
import hands from "../images/hands.jpg";

const NikahNama = () => {
  return (
    <div>
      <header className="text-center text-3xl py-5 border shadow ">
        <h1 className="">নিকাহ্‌নামা</h1>
      </header>

      <div></div>

      <div
        className="flex container border mx-auto py-5 flex-wrap justify-evenly h-1/2 bg-slate-50 bg-bottom "
        style={{ backgroundImage: `url(${hands})`, backgroundSize: "cover", backgroundBlendMode: "lighten" }}
      >
        <div className="w-1/2">
          <h1>Hello World</h1>
        </div>
        <Link to="/register">
          <div className="border w-full p-5 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
            <div className="p-5">
              <BiBookAdd className="text-5xl mx-auto" />
            </div>
            <h2>বিবাহ নিবন্ধন করুন</h2>
          </div>
        </Link>

        <Link to="/register">
          <div className="border w-full p-5 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
            <div className="p-5">
              <MdOutlineManageSearch className="text-5xl mx-auto" />
            </div>
            <h2>নিবন্ধন যাচাই করুন</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NikahNama;
