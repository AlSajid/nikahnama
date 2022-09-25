import React from "react";

const Person = ({ data }) => {
  return (
    <div className="border md:w-1/2 w-full p-3">
      <h1 className="text-xl">{data.name_of_national}</h1>
      <h1 className="text-slate-500">পিতাঃ{data.name_of_father}</h1>
      <h1 className="text-slate-500">মাতাঃ{data.name_of_mother}</h1>
      <img src={data.image_of_national} alt="" />
    </div>
  );
};

export default Person;
