import React, { useEffect, useState } from "react";
import Conditions from "./Conditions";
import Power from "./Power";
import ShowPersonInfo from "./ShowPersonInfo";

const Final = ({ addBlock }) => {
  const [error, setError] = useState([]);
  const wedLocation = localStorage.getItem("wed-location");
  const groom = JSON.parse(localStorage.getItem("groom-information"));
  const bride = JSON.parse(localStorage.getItem("bride-information"));
  const witness1 = JSON.parse(localStorage.getItem("witness1-information"));
  const witness2 = JSON.parse(localStorage.getItem("witness2-information"));
  const kazi = JSON.parse(localStorage.getItem("kazi-information"));

  const mahr = localStorage.getItem("mahr");
  const mustPaidMahr = localStorage.getItem("mustPaidMahr");
  const paidMahr = localStorage.getItem("paidMahr");

  const datefix = localStorage.getItem("datefix");
  const nnDate = localStorage.getItem("nn-date");
  const conditions = localStorage.getItem("conditions");

  const block = {
    wedLocation,
    groom,
    bride,
    witness1,
    witness2,
    kazi,
    mahr,
    mustPaidMahr,
    paidMahr,
    datefix,
    nnDate,
    conditions,
  };

  useEffect(() => {
    addBlock(block);
  }, []);

  return (
    <div>
      {error.length > 0 && (
        <div className="overflow-y-scroll h-3/5">
          <table className="w-full my-3 border-2">
            <tbody>
              <tr className="border">
                <td className="p-3">বিবাহের স্থান</td>
                <td className="p-3">
                  <span className="sjn">
                    {localStorage.getItem("wed-ward")}
                  </span>
                  নং ওয়ার্ড, {wedLocation}
                </td>
              </tr>
              <tr className="border">
                <td className="p-3">বিবাহ নির্ধারণের তারিখ</td>
                <td className="p-3 sjn">{localStorage.getItem("datefix")}</td>
              </tr>
              <tr className="border">
                <td className="p-3">বিবাহ নিবন্ধনের তারিখ</td>
                <td className="p-3 sjn">{localStorage.getItem("nn-date")}</td>
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
                    <span className="sjn">{mahr}</span> টাকা মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">নগদ পরিশোধযোগ্য মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{mustPaidMahr}</span> টাকা মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">পরবর্তীতে পরিশোধযোগ্য মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{mahr - mustPaidMahr}</span> টাকা
                    মাত্র
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-3 border">পরিশোধকৃত মোহর</td>
                  <td className="p-3">
                    <span className="sjn">{paidMahr}</span> টাকা মাত্র
                  </td>
                </tr>
              </tbody>
            </table>

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
