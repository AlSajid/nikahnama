import React, { useRef, useState } from "react";
import Bride from "./NikahInfo/Bride";
import Groom from "./NikahInfo/Groom";
import Location from "./NikahInfo/Location";

const Registration = () => {
  const [level, setLevel] = useState(1);

  const groomRef = useRef();
  const brideRef = useRef();
  const witnessRef = useRef();

  function handleAddBlock(e) {
    const groom = groomRef.current.value;
    const bride = brideRef.current.value;
    const witness = witnessRef.current.value;

    const block = { groom: groom, bride: bride, witness: witness };

    fetch("http://localhost:5000/addBlock", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(block),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    e.preventDefault();
  }

  return (
    <div
      className="flex h-screen bg-slate-100"
      style={{ fontFamily: "Noto Serif Bengali" }}
    >
      <div className="m-auto bg-cyan-50 shadow-lg p-10 h-1/7">
        <div className="border h-full py-10 px-3 bg-white">
          <h1 className="text-3xl text-center font-semibold ">
            ডিজিটাল নিকাহ্‌নামা
          </h1>

          <p className="my-3 text-xs text-right">
            [বিধি ২৭ (১) (ক) দ্রষ্টব্য]
            <br />
            মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা, ২০০৯ এর বিধি ২৮ (১) (ক)
            অনুযায়ী বিবাহ ফরম
          </p>
          <hr />

          <form
            autoComplete="off"
            onSubmit={handleAddBlock}
            className="text-xl"
          >
            {level === 1 && <Location />}
            {level === 2 && <Groom />}
            {level === 3 && <Bride />}
          </form>
          {level > 1 && (
            <button
              className="bg-yellow-50"
              onClick={() => setLevel(level - 1)}
            >
              পূর্বর্বতী ধাপ
            </button>
          )}

          <button onClick={() => setLevel(level + 1)}>পরবর্তী ধাপ</button>

          <button>Add Block</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
