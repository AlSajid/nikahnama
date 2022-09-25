import React from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Loader from "./register/Loader";

const Confirmation = ({ status, hash }) => {
  return (
    <div>
      {status !== "added" ? (
        <div className="flex justify-center flex-col text-center my-5">
          <p className="text-slate-500 text-3xl my-5">ব্লক মাইন করা হচ্ছে...</p>
          <Loader text={hash} className="text-5xl"></Loader>
          {/* <p>হ্যাশঃ {hash}</p> */}
          <QRCode
            value={`https://nikahnama.vercel.app/search/${
              JSON.parse(localStorage.getItem("groom-information")).nid_number
            }`}
          />
        </div>
      ) : (
        <div className="flex justify-center flex-col text-center my-10">
          <p className="text-red-500 text-5xl my-5">অভিনন্দন!!!</p>
          <p className="my-3">বিবাহ যথাযথভাবে নিবন্ধিত হয়েছে</p>
          <p className="text-slate-500">
            চলুনঃ{" "}
            <Link to="/blockchain">
              <span className="underline"> ব্লকচেইন পাতায়</span>
            </Link>
            <QRCode
              value={`https://nikahnama.vercel.app/search/${
                JSON.parse(localStorage.getItem("groom-information")).nid_number
              }`}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
