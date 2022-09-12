import { toBengaliWords } from "number-to-bengli-words";
import React, { useState } from "react";
import Power from "./Power";

const Mahr = () => {
  const [mahr, setMahr] = useState(localStorage.getItem("mahr"));
  const [mustMahr, setMustMahr] = useState(0);

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
              setMahr(e.target.value)
              localStorage.setItem("mahr", e.target.value);
              setNumberInWords(toBengaliWords(parseInt(e.target.value)));
            }}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full  mx-3 py-3">
          <label className="block">নগদ পরিশোধযোগ্য মোহর</label>
          <input
            type="number"
            value={localStorage.getItem("mustPaidMahr")}
            onBlurCapture={() => setNumberInWords(-1)}
            onChange={(e) => {
              localStorage.setItem("mustPaidMahr", e.target.value);
              setNumberInWords(toBengaliWords(parseInt(e.target.value)));
              setMustMahr(e.target.value);
            }}
            className="border-b-2 border-dashed w-2/3 my-1 py-1 text-xl text-right sjn mx-1 focus:outline-0 appearance-none"
          ></input>
          টাকা
        </div>

        <div className="w-full mx-3 py-3">
          <label className="block">পরবর্তীতে পরিশোধযোগ্য মোহর</label>
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
              setNumberInWords(toBengaliWords(parseInt(e.target.value)));
              localStorage.setItem("paidMahr", e.target.value);
            }}
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
