import React, { useEffect, useState } from "react";
import Gun from "gun";
import Header from "./Header";
import Block from "./Block";

const Blockchain = () => {
  const [blockchain, setBlockchain] = useState([]);
  console.log(blockchain);

  useEffect(() => {
    const url = "https://odd-stockings-newt.cyclic.app/blockchain";
    // const url = "http://localhost:5000/blockchain";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlockchain(data.chain));
  }, []);

  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        {blockchain?.map((block) => (
          <Block key={block.hash} block={block} />
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
