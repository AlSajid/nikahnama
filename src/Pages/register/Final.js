import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Power from "./Power";
import ShowPersonInfo from "./ShowPersonInfo";

const Final = ({ addBlock }) => {
  const [error, setError] = useState({});

  const wedLocation = localStorage.getItem("wed-location");

  const groom = {
    ...JSON.parse(localStorage.getItem("groom-information")),
    location: localStorage.getItem("groom-location"),
  };
  const bride = {
    ...JSON.parse(localStorage.getItem("bride-information")),
    location: localStorage.getItem("bride-location"),
  };

  const witness1 = {
    ...JSON.parse(localStorage.getItem("witness1-information")),
    location: localStorage.getItem("witness1-location"),
  };
  const witness2 = {
    ...JSON.parse(localStorage.getItem("witness2-information")),
    location: localStorage.getItem("witness2-location"),
  };
  const kazi = {
    ...JSON.parse(localStorage.getItem("kazi-information")),
    location: localStorage.getItem("kazi-location"),
  };

  const mahr = {
    total: localStorage.getItem("mahr"),
    must: localStorage.getItem("mustPaidMahr"),
    paid: localStorage.getItem("paidMahr"),
  };

  const dates = {
    confirmed: localStorage.getItem("confirmation-date"),
    registered: localStorage.getItem("registration-date"),
  };
  const conditions = JSON.parse(localStorage.getItem("conditions"));

  const block = {
    wedLocation,
    groom,
    bride,
    witness1,
    witness2,
    kazi,
    mahr,
    dates,
    conditions,
  };

  // console.log(wedLocation);
  useEffect(() => {
    // if (wedLocation === null) {
    //   setError({ message: "বিবাহ স্থান নির্বাচন করুন", goto: "1" });
    // } else if (regDate === undefined) {
    //   setError({ message: "বিবাহ নিবন্ধনের তারিখ নির্বাচন করুন", goto: "1" });
    // } else if (fixDate === undefined) {
    //   setError({ message: "বিবাহ নির্ধারণের তারিখ নির্বাচন করুন", goto: "1" });
    // } else if (groom?.name_of_national === undefined) {
    //   setError({ message: "বরের তথ্য পূরণ করুন", goto: "2" });
    // } else if (groom?.location === undefined) {
    //   setError({ message: "বরের ঠিকানা পূরণ করুন", goto: "2" });
    // } else if (bride?.name_of_national === undefined) {
    //   setError({ message: "কনের তথ্য পূরণ করুন", goto: "3" });
    // } else if (bride?.location === undefined) {
    //   setError({ message: "কনের ঠিকানা পূরণ করুন", goto: "2" });
    // }
    //else if (witness1 === null) {
    //   setError({ message: "সাক্ষীর তথ্য পূরণ করুন", goto: "7" });
    // } else if (witness2 === null) {
    //   setError({ message: "সাক্ষীর তথ্য পূরণ করুন", goto: "8" });
    // } else if (kazi === null) {
    //   setError({ message: "কাজির তথ্য পূরণ করুন", goto: "9" });
    // } else if (mahr === null) {
    //   setError({ message: "মাহর পরিমাণ নির্বাচন করুন", goto: "4" });
    // } else if (mustPaidMahr === null) {
    //   setError({ message: "মাহর পরিমাণ নির্বাচন করুন", goto: "4" });
    // } else if (paidMahr === null) {
    //   setError({ message: "মাহর পরিমাণ নির্বাচন করুন", goto: "4" });
    // } else {
    //   if (groom.nid_number === bride.nid_number) {
    //     setError({ message: "বর ও কনে একই হতে পারে না", goto: "2" });
    //   } else if (witness1.nid_number === witness2.nid_number) {
    //     setError({ message: "দুজন সাক্ষী একই হতে পারে না", goto: "7" });
    //   } else if (groom.nid_number === witness1.nid_number) {
    //     setError({ message: "বর ও সাক্ষী একই হতে পারে না", goto: "7" });
    //   } else if (groom.nid_number === witness2.nid_number) {
    //     setError({ message: "বর ও সাক্ষী একই হতে পারে না", goto: "8" });
    //   } else if (bride.nid_number === witness1.nid_number) {
    //     setError({ message: "কনে ও সাক্ষী একই হতে পারে না", goto: "7" });
    //   } else if (bride.nid_number === witness2.nid_number) {
    //     setError({ message: "কনে ও সাক্ষী একই হতে পারে না", goto: "8" });
    //   } else if (groom.nid_number === kazi.nid_number) {
    //     setError({ message: "বর ও কাজি একই হতে পারে না", goto: "9" });
    //   } else if (bride.nid_number === kazi.nid_number) {
    //     setError({ message: "কনে ও কাজি একই হতে পারে না", goto: "9" });
    //   } else if (witness1.nid_number === kazi.nid_number) {
    //     setError({ message: "সাক্ষী ও কাজি একই হতে পারে না", goto: "9" });
    //   } else if (witness2.nid_number === kazi.nid_number) {
    //     setError({ message: "সাক্ষী ও কাজি একই হতে পারে না", goto: "9" });
    //   }
    // }
  }, [wedLocation]);

  return (
    <div className="h-5/6">
      {error.message ? (
        <Link to={`/register/${error.goto}`}>
          <div className="border-2 text-center border-dashed w-1/2 border-red-500 bg-red-600 p-3 text-white rounded container mx-auto">
            <div>{error.message}</div>
          </div>
        </Link>
      ) : (
        <div className="overflow-auto h-3/4">
          <table className="w-full my-3 border-2">
            <tbody>
              <tr className="border">
                <td className="p-3 w-1/4 border">বিবাহের স্থান</td>
                <td className="p-3">
                  <span className="sjn">
                    {localStorage.getItem("wed-ward")}
                  </span>
                  নং ওয়ার্ড, {wedLocation}
                </td>
              </tr>
              <tr className="border">
                <td className="p-3 w-1/4 border">বিবাহ নির্ধারণের তারিখ</td>
                <td className="p-3 sjn">{dates.confirmed}</td>
              </tr>
              <tr className="border">
                <td className="p-3 w-1/4 border">বিবাহ নিবন্ধনের তারিখ</td>
                <td className="p-3 sjn">{dates.registered}</td>
              </tr>
            </tbody>
          </table>
          <ShowPersonInfo type={"groom"} data={groom} />
          <ShowPersonInfo type={"bride"} data={bride} />
          <ShowPersonInfo type={"witness1"} data={witness1} />
          <ShowPersonInfo type={"witness2"} data={witness2} />
          <ShowPersonInfo type={"kazi"} data={kazi} />
          <div>
            <table className="w-full border-2 my-3">
              <tbody>
                <tr className="border ">
                  <td className="p-3 w-1/4 border">নির্ধারিত মোহরের পরিমাণ</td>
                  <td className="p-3">
                    <span className="sjn">{mahr.total}</span> টাকা মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">নগদ পরিশোধযোগ্য মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{mahr.must}</span> টাকা মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">পরবর্তীতে পরিশোধযোগ্য মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{mahr.total - mahr.paid}</span> টাকা
                    মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">পরিশোধকৃত মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{mahr.paid}</span> টাকা মাত্র
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="my-3">
              <table className="w-full border-2 my-3">
                <tbody>
                  <tr>
                    <td
                      rowSpan={conditions.length + 1}
                      className="p-3 w-1/4 border"
                    >
                      শর্তাবলী
                    </td>
                  </tr>
                  {conditions.map((condition) => (
                    <tr className="border ">
                      <td className="p-3">{condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="my-3">
              <Power />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Final;
