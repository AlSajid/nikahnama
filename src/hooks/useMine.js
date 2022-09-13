import sha256 from "crypto-js/sha256.js";

const mineBlocks = (block, difficulty) => {
  const started = new Date().getTime();
  let nonce = 0;
  let hash = sha256(block + nonce).toString();

  const calculateHash = () => {
    return sha256(JSON.stringify(block) + nonce).toString();
  };
  console.log("Hash: " + hash);
  // while (hash.substring(0, difficulty) !== Array(difficulty + 1).join("1")) {
  //   nonce++;
  //   hash = calculateHash();
    
  // }

  console.log(
    "Mining Completed in " + (new Date().getTime() - started) + " milliseconds"
  );

  return nonce;
};

export default mineBlocks;
