import React from "react";

const Block = ({ block }) => {
  //   console.log(data);
  return (
    <div className="border-2 border-black flex flex-wrap m-3 bg-slate-50 p-3 rounded-md text-lg">
      <table className="border-collapse ">
        <tr className="">
          <td className="w-40">আগের হ্যাশ</td>
          <td className="border-b py-3">{block.previousHash}</td>
        </tr>
        <tr className="">
          <td>বর</td>
          <td className="border-b py-3">{block.data.groom.name_of_national}</td>
        </tr>
        <tr className="">
          <td>কনে</td>
          <td className="border-b py-3">{block.data.bride.name_of_national}</td>
        </tr>
        <tr className="">
          <td>হ্যাশ</td>
          <td className="border-b py-3">{block.hash}</td>
        </tr>
      </table>
    </div>
  );
};

export default Block;
