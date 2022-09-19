import React, { useState } from "react";

const Info = () => {
  const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  };

  const [fixDate, setFixDate] = useState(localStorage.getItem("fixDate"));

  return (
    <div className="flex">
      <div className="w-full mx-3 p-3">
        <label className="block">বিবাহ নির্ধারণের তারিখ</label>
        <input
          type="date"
          defaultValue={getToday()}
          value={fixDate}
          onChange={(e) => {
            setFixDate(e.target.value);
            localStorage.setItem("fixDate", e.target.value);
          }}
          className="text-xl w-full sjn p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
        ></input>
      </div>
      <div className="w-full mx-3 p-3">
        <label className="block">বিবাহ নিবদ্ধনের তারিখ</label>
        <input
          type="date"
          value={getToday()}
          className="text-xl sjn w-full p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
        ></input>
      </div>
    </div>
  );
};

export default Info;
