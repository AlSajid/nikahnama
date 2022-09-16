import React, { useEffect, useState } from "react";
import Gun from "gun";
import Header from "./Header";

const Blockchain = () => {
  const gun = Gun({
    peers: ["http://192.168.31.219:5000/gun", "http://192.168.31.109:5000/gun"],
  });

  const [blockchain, setBlockchain] = useState("");
  useEffect(() => {
    gun.get("blockchain").on((data) => {
      setBlockchain(data?.nikahNama);
      console.log(data);
    });
  }, [gun]);

  const load = (value) => {
    gun.get("blockchain").put({ nikahNama: value });
  };
  

  return (
    <div>
      <Header />
      <button className="border bg-red-400" onClick={() => load()}>
        Load
      </button>
      <input type={"text"} onChange={(e) => load(e.target.value)} />
      {blockchain.map((block) => (
        <p>{block}</p>
      ))}
    </div>
  );
};

export default Blockchain;
