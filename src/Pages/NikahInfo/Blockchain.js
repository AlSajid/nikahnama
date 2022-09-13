import React, { useEffect, useState } from "react";
import Gun from "gun";

const Blockchain = () => {
  const gun = Gun({
    peers: ["http://192.168.31.219:5000/gun"],
    peers: ["http://192.168.31.109:5000/gun"],
  });

  const [blockchain, setBlockchain] = useState([]);

  gun.get("blockchain").once((data) => setBlockchain([data?.nikahNama]));

  const load = () => {
    gun.get("blockchain").put({ nikahNama: "hello" });
  };

  return (
    <div>
      <h1>নিকাহ্‌নামা সমূহ</h1>
      <button onClick={() => load()}>Load</button>

      {blockchain.map((block) => (
        <p>{block}</p>
      ))}
    </div>
  );
};

export default Blockchain;
