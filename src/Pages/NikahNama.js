import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri"
import { MdOutlineManageSearch } from "react-icons/md";
import Header from "./NikahInfo/Header";
import { SiBlockchaindotcom } from "react-icons/si";
import Slides from "../Components/Slides";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const NikahNama = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="">
      <Header />
      <Slides />
      <div className="flex flex-col md:flex-row border mx-auto py-5 bg-slate-50 bg-bottom rounded-xl container">
        <div className="md:w-1/3 w-full flex items-center justify-center ">
          <h1 className="text-3xl m-5">এখন বিবাহ নিবন্ধন খুবই সহজ...</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:w-2/3 justify-evenly">
          <Link to="/register" className="m-3">
            <div className="border hidden md:block w-48 p-3 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
              <div className="p-5">
                <BiBookAdd className="text-5xl mx-auto" />
              </div>
              <h2 className="text-center">বিবাহ নিবন্ধন করুন</h2>
            </div>
          </Link>

          <Link to="/search" className="m-3">
            <div className="border w-48 p-3 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
              <div className="p-5">
                <MdOutlineManageSearch className="text-5xl mx-auto" />
              </div>
              <h2 className="text-center">নিবন্ধন যাচাই করুন</h2>
            </div>
          </Link>

          <Link to="/blockchain" className="m-3">
            <div className="border w-48 p-3 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
              <div className="p-5">
                <SiBlockchaindotcom className="text-5xl mx-auto" />
              </div>
              <h2 className="text-center">ব্লকচেইন</h2>
            </div>
          </Link>

          {
            user?.uid ?
              <div className="m-3 cursor-pointer" onClick={handleLogout}>
                <div className="border w-48 p-3 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
                  <div className="p-5">
                    <RiLogoutBoxFill className="text-5xl mx-auto" />
                  </div>
                  <h2 className="text-center">কাজি প্রস্থান</h2>
                </div>
              </div>
              :
              <Link to="/login" className="m-3">
                <div className="border w-48 p-3 rounded hover:shadow-sm transition duration-300 ease-in-out hover:shadow-red-500 bg-white">
                  <div className="p-5">
                    <RiLoginBoxFill className="text-5xl mx-auto" />
                  </div>
                  <h2 className="text-center">কাজি প্রবেশ</h2>
                </div>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default NikahNama;
