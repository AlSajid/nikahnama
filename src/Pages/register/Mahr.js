import { toBengaliWords } from "number-to-bengli-words";
import React, { useEffect, useState } from "react";
import useFees from "../../hooks/useFees";

const Mahr = () => {
  const [mahr, setMahr] = useState(localStorage.getItem("mahr"));
  const [mustMahr, setMustMahr] = useState(
    localStorage.getItem("mustPaidMahr")
  );
  const [paidMahr, setPaidMahr] = useState(localStorage.getItem("paidMahr"));
  const [numberInWords, setNumberInWords] = useState("");


  return (
    <div>
      <div className="flex my-3">
        <div className="w-full mx-3 py-3">
          <label className="block">নির্ধারিত মোহরের পরিমাণ</label>
          <input
            type="number"
            value={mahr}
            onBlurCapture={() => setNumberInWords(-1)}
            onChange={(e) => {
              if (e.target.value > 0) {
                setMahr(parseInt(e.target.value));
                localStorage.setItem("mahr", e.target.value);
                setNumberInWords(toBengaliWords(parseInt(e.target.value)));
              } else if (e.target.value === "") {
                setMahr("");
                localStorage.setItem("mahr", "");
                setNumberInWords(toBengaliWords(0));
              }
            }}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full  mx-3 py-3">
          <label className="block">নগদ পরিশোধযোগ্য মোহর</label>
          <input
            type="number"
            value={mustMahr}
            onBlurCapture={() => setNumberInWords(-1)}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > 0 && value <= mahr) {
                setMustMahr(e.target.value);
                localStorage.setItem("mustPaidMahr", value);
                setNumberInWords(toBengaliWords(parseInt(value)));
              } else if (e.target.value === "") {
                setMustMahr("");
                localStorage.setItem("mustPaidMahr", "");
                setNumberInWords(toBengaliWords(0));
              }
            }}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full mx-3 py-3">
          <label className="block">বিলম্বিত মোহর</label>
          <input
            type="number"
            value={mahr - mustMahr}
            onChange={(e) => localStorage.setItem("unpaidMahr", e.target.value)}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full mx-3 py-3">
          <label className="block">পরিশোধকৃত মোহর</label>
          <input
            type="number"
            onBlurCapture={() => setNumberInWords(-1)}
            value={localStorage.getItem("paidMahr")}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > 0 && value <= mahr) {
                setPaidMahr(value);
                localStorage.setItem("paidMahr", value);
                setNumberInWords(toBengaliWords(parseInt(value)));
                localStorage.setItem("paidMahr", value);
              } else if (e.target.value === "") {
                localStorage.setItem("paidMahr", "");
                setNumberInWords(toBengaliWords(0));
              }
            }}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full mx-3 py-3">
          <label className="block">নিবন্ধন খরচ</label>
          <input
            type="number"
            value={useFees(mahr)}
            onChange={(e) => localStorage.setItem("kazi-fees", e.target.value)}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>
      </div>

      {numberInWords.length > 0 && (
        <div className="text-center p-5 my-5 border-2 bg-slate-100 border-dotted rounded">
          {numberInWords} টাকা মাত্র
        </div>
      )}
    </div>
  );
};

export default Mahr;
