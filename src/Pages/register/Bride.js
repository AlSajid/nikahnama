import React from "react";

const Bride = () => {
  return (
    <div class="p-3 m-3 border">
      <label className="text-center font-semibold">কনের নাম</label>
      <input className="w-full p-3 my-3 border-b-2"></input>

      <label className="text-center font-semibold">কনের পিতার নাম</label>
      <input className="w-full p-3 my-3 border-b-2"></input>

      <label className="text-center font-semibold">কনের মাতার নাম</label>
      <input className="w-full p-3 my-3 border-b-2"></input>

      <label className="text-center font-semibold">কনের ঠিকানা</label>
      <input className="w-full p-3 my-3 border-b-2"></input>
    </div>
  );
};

export default Bride;
