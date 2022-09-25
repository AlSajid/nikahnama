import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Search = () => {
  const [groomNID, setGroomNID] = useState("");
  const [brideNID, setBrideNID] = useState("");
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 p-3 ">
            <h1 className="text-3xl tracking-widest leading-loose">
              এখন <br /> বিবাহ যাচাই করুন <br /> খুব সহজেই
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full mx-3 py-3">
              <div className="my-5 ">
                <label className="block text-lg">
                  বরের জাতীয় পরিচয় পত্রের নম্বর
                </label>
                <input
                  type="number"
                  onChange={(e) => setGroomNID(e.target.value)}
                  className="border-b-2 border-dashed w-2/3 m-1 py-1 text-xl text-right sjn focus:outline-0 appearance-none"
                />
              </div>

              <div className="my-5 ">
                <label className="block text-lg">
                  কনের জাতীয় পরিচয় পত্রের নম্বর
                </label>
                <input
                  type="number"
                  onChange={(e) => setBrideNID(e.target.value)}
                  className="border-b-2 border-dashed w-2/3 m-1 py-1 text-xl text-right sjn focus:outline-0 appearance-none"
                />
              </div>
              <Link to={`${groomNID}`}>
                <button className="border w-2/3 my-1 p-3 text-center rounded mx-auto bg-slate-100 hover:bg-slate-200 ">
                  যাচাইকরণ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
