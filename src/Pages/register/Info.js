import React from "react";

const Info = () => {
  const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div className="flex">
      <div className="w-full mx-3 p-3">
        <label className="block">বিবাহ নির্ধারণের তারিখ</label>
        <input
          type="date"
          value={localStorage.getItem("datefix")}
          onChange={(e) => localStorage.setItem("datefix", e.target.value)}
          className="text-xl w-full p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
        ></input>
      </div>
      <div className="w-full mx-3 p-3">
        <label className="block">নিকাহ্‌নামা প্রস্তুতের তারিখ</label>
        <input
          type="date"
          value={localStorage.getItem("nn-date")}
          onChange={(e) => localStorage.setItem("nn-date", e.target.value)}
          className="text-xl w-full p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
        ></input>
      </div>
    </div>
  );
};

export default Info;
