import React from "react";

const Power = () => {
  return (
    <div className="mx-auto w-2/3">
      <table className="w-full border-slate-500 ">
        <tbody>
          <tr className="border-b-2">
            <td className="p-3">স্ত্রী তালাক দেওয়ার ক্ষমতা পাবেন?</td>
            <td className="border-b-2">
              <select
                id="select_page"
                className="w-full h-full text-center focus:outline-0 appearance-none"
                value={localStorage.getItem("wifed")}
                onChange={(e) => localStorage.setItem("wifed", e.target.value)}
              >
                <option>...</option>
                <option value={false}>না</option>
                <option value={true}>হ্যাঁ</option>
              </select>
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="p-3">স্বামী তালাক প্রদানের অধিকার বজায় আছে?</td>
            <td className="">
              <select
                id="select_page"
                value={localStorage.getItem("husd")}
                className="w-full h-full text-center focus:outline-0 appearance-none"
                onChange={(e) => localStorage.setItem("husd", e.target.value)}
              >
                <option>...</option>
                <option value={false}>না</option>
                <option value={true}>হ্যাঁ</option>
              </select>
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="p-3">বিবাহ সংক্রান্ত কোনো চুক্তি হয়েছে?</td>
            <td className="">
              <select
                id="select_page"
                className="w-full h-full text-center focus:outline-0 appearance-none"
                value={localStorage.getItem("contract")}
                onChange={(e) =>
                  localStorage.setItem("contract", e.target.value)
                }
              >
                <option>...</option>
                <option value={false}>না</option>
                <option value={true}>হ্যাঁ</option>
              </select>
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="p-3">কন্যার বর্তমান বৈবাহিক অবস্থা</td>
            <td className="">
              <select
                id="select_page"
                className="w-full h-full text-center focus:outline-0 appearance-none"
                value={localStorage.getItem("bridem")}
                onChange={(e) => localStorage.setItem("bridem", e.target.value)}
              >
                <option>...</option>
                <option value={"unmarried"}>অবিবাহিত</option>
                <option value={"widow"}>বিধবা</option>
                <option value={"divorce"}>তালাকপ্রাপ্ত</option>
              </select>
            </td>
          </tr>

          <tr className="border-b-2">
            <td className="p-3">বরের বর্তমান বৈবাহিক অবস্থা</td>
            <td className="">
              <select
                id="select_page"
                value={localStorage.getItem("groomm")}
                className="w-full h-full text-center focus:outline-0 appearance-none"
                onChange={(e) => localStorage.setItem("groomm", e.target.value)}
              >
                <option>...</option>
                <option>অবিবাহিত</option>
                <option>বিবাহিত</option>
                <option>বিপত্নীক</option>
                <option>তালাকপ্রাপ্ত</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Power;
