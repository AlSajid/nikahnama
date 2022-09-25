import sha256 from "crypto-js/sha256.js";
import pkg from "elliptic";
const { ec } = pkg;

const mineBlocks = async (data, setHash) => {
  const difficulty = 1;
  const timestamp = new Date().getTime();

  const block = { data };

  let nonce = 0;
  let hash = sha256(JSON.stringify(block.data) + nonce + timestamp).toString();

  // calculating hash
  while (
    hash.substring(0, difficulty) !== Array(difficulty + 1).join("1") &&
    hash.substring(hash.length - difficulty, hash.length) !==
      Array(difficulty + 1).join("1")
  ) {
    nonce++;
    hash = sha256(JSON.stringify(block.data) + nonce + timestamp).toString();
    setHash(hash);
    await new Promise((resolve) => setTimeout(resolve, 1)); // wait 1 ms
  }

  // signing the block

  const myKey = ec("secp256k1").keyFromPrivate(
    "0e9e7970f29c59ee1424fb74207af075c17511a41dd59009dc387e8b2d91d6d2"
  );

  const sign = myKey.sign(hash, "base64");
  const signature = sign.toDER("hex");

  return { ...block, timestamp, nonce, hash, signature };
};

export default mineBlocks;
