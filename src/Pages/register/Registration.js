import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Conditions from "./Conditions";
import Final from "./Final";
import Info from "./Info";
import Location from "./Location";
import Mahr from "./Mahr";
import Participants from "./Participants";
import Power from "./Power";
// import Gun from "gun";
import Loader from "./Loader";
// import mineBlocks from "../../hooks/useMine";

const Registration = () => {
  let { level } = useParams();
  const [loader, setLoader] = useState("");
  const [block, setBlock] = useState();

  // const gun = Gun({
  //   peers: ["http://localhost:5000/gun"],
  // });
  // const blockchain = gun.get("nikahnama");

  function handleAddBlock() {
    // console.log("Block mined: " + mineBlocks(block, 3));
    console.log(block);
    fetch("http://localhost:5000/addBlock", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(block),
    })
      .then((response) => response.json())
      .then((data) => {
        // setLoader("অভিনন্দন! সফলভাবে বিবাহ নিবন্ধিত হয়েছে");
        console.log(data);
      });
    // gun.get("tutorial").on((data) => {
    //   console.log("data changed: ", data);
    // });
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <div className="m-auto bg-white shadow-lg p-10 container h-5/6 ">
        <div className="border-dotted border-4 border-black h-full py-5 px-5 relative md:hidden">
          <h2 className="text-lg text-center">দুঃখিত</h2>
          <p className="leading-7 text-justify">      
            <br /> নিবন্ধিত তথ্য সংশোধনযোগ্য নয়। অত্যন্ত সতর্কতার সাথে তথ্য পূরণ
            আবশ্যক। এজন্য মুঠোফোন থেকে নিবন্ধন কার্যক্রম পরিচালনা গ্রহণযোগ্য নয়।
          </p>
        </div>
        {loader === "" ? (
          <div className="border-dotted border-4 border-red-500 h-full py-5 px-5 relative hidden md:block">
            <h1 className="text-3xl text-center sj my-3 text-red-600">
              ডিজিটাল নিকাহ্‌নামা
            </h1>

            <p className="my-3 text-xs text-right">
              [বিধি ২৭ (১) (ক) দ্রষ্টব্য]
              <br />
              মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা, ২০০৯ এর বিধি ২৮ (১) (ক)
              অনুযায়ী বিবাহ ফরম
            </p>
            <hr className="my-5" />

            {/* <form
            autoComplete="off"
            onSubmit={handleAddBlock}
            className="text-xl"
          > */}
            {level === "1" && (
              <div className="text-center">
                <label className=" text-xl my-3">
                  যেখানে বিবাহকার্য নিষ্পন্ন হয়েছে
                </label>
                <div className="my-10">
                  <Location type="wed" />
                </div>
                <div className="my-10">
                  <Info />
                </div>
              </div>
            )}
            {level === "2" && <Participants type="groom" />}
            {level === "3" && <Participants type="bride" />}
            {level === "4" && <Mahr />}
            {level === "5" && <Power />}
            {level === "6" && <Conditions />}
            {level === "7" && <Participants type="witness1" />}
            {level === "8" && <Participants type="witness2" />}
            {level === "9" && <Participants type="kazi" />}
            {level === "10" && <Final addBlock={setBlock} />}

            {level !== "1" && (
              <Link to={"/register/" + (parseInt(level) - 1)}>
                <button className="rounded absolute bottom-0 left-0 bg-slate-50 border-b-2 border-dashed border-slate-300 m-3 py-3 w-32">
                  পূর্ববর্তী ধাপ
                </button>
              </Link>
            )}
            {level === "10" ? (
              <button
                onClick={() => handleAddBlock()}
                className="absolute bottom-0 right-0 border-2 rounded bg-slate-50 border-dashed m-3 py-3 w-32 "
              >
                নিবন্ধন করুন
              </button>
            ) : (
              <Link to={"/register/" + (parseInt(level) + 1)}>
                <button className="absolute bottom-0 right-0 border-b-2 bg-slate-50 rounded border-dashed border-slate-300 m-3 py-3 w-32 ">
                  পরবর্তী ধাপ
                </button>
              </Link>
            )}
          </div>
        ) : (
          <Loader text={loader} />
        )}
      </div>
    </div>
  );
};

export default Registration;
