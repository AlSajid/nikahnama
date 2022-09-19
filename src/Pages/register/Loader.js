import React from "react";

const Loader = ({text}) => {
  return (
    <div className=" ">
      <div className="mx-auto h-10 w-10 rounded-full border-r-2 border-slate-100 animate-spin border-dashed ">
        <div className="rounded-full border-b-4 border-red-500 border-dotted h-10 w-10"></div>
      </div>
      <p className="text-sm text-red-500 my-3 text-center">{text}...</p>
    </div>
  );
};

export default Loader;
