import React from "react";

const Block = ({hash, data}) => {
  console.log();
  return (
    <div className="border-2 border-black  w-1/2 m-3 bg-zinc-600 text-white p-1 rounded-md text-lg">
      <table className="border-collapse ">
        <tr className="">
          <td className="w-40">আগের হ্যাশ</td>
          {/* <td className="border-b py-3">{data.preHash}</td> */}
        </tr>
        <tr className="">
          <td>বর</td>
          {/* <td className="border-b py-3">{data.groom.national_name}</td> */}
        </tr>
        <tr className="">
          <td>কনে</td>
          {/* <td className="border-b py-3">{props.block.bride}</td> */}
        </tr>
        <tr className="">
          <td>হ্যাশ</td>
          {/* <td className="border-b py-3">{props.block.hash}</td> */}
        </tr>
      </table>
    </div>
  );
};

export default Block;
