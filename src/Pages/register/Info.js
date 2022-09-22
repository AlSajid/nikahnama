import React, { useState } from "react";

const Info = () => {
  const [fixDate, setFixDate] = useState(localStorage.getItem("confirmation-date"));

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
        <label className="block">বিবাহ নিবন্ধনের তারিখ</label>
        {localStorage.setItem("registration-date", getToday())}
        <input
          type="date"
          value={getToday()}
          className="text-xl sjn w-full p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
          disabled={true}
        ></input>
      </div>

      <div className="w-full mx-3 p-3">
        <label className="block">বিবাহ নির্ধারণের তারিখ</label>
        <input
          type="date"
          defaultValue={"2000-01-01"}
          value={fixDate}
          onChange={(e) => {
            setFixDate(e.target.value);
            localStorage.setItem("confirmation-date", e.target.value);
          }}
          className="text-xl w-full sjn p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
        ></input>
      </div>
    </div>
  );
};

export default Info;
