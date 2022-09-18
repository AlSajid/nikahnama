import React, { useEffect, useState } from "react";
import Gun from "gun";
import Header from "./Header";
import Block from "./Block";

const Blockchain = () => {
  const gun = Gun({
    peers: ["http://192.168.31.219:5000/gun", "http://192.168.31.109:5000/gun"],
  });

  const [blockchain, setBlockchain] = useState([]);
  useEffect(() => {
    gun.get("blockchain").on((data) => {
      setBlockchain(JSON.parse(data?.nikahNama));
    });
  }, []);

  console.log(blockchain);

  return (
    <div className="">
      <Header />
      <div>
        {blockchain?.map((block) => (
          <Block key={block.hash} data={block.data}/>
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
