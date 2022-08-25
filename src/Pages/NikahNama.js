import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Block from "./Block";

const NikahNama = () => {
  const [blocks, setBlock] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:5000/blockchain")
  //     .then((response) => response.json())
  //     .then((data) => setBlock(data?.chain));
  // }, []);

  return (
    <div className="flex flex-wrap ">
      {/* {blocks?.map((block) => (
        <Block block={block} key={block.key} />
      ))} */}
      <Link to="/register">বিয়ে রেজিস্টার করুন</Link>
    </div>
  );
};

export default NikahNama;
