import React, { useEffect, useState } from "react";
import "./slides.css";
import a from "./../images/a.jpg";
import c from "./../images/c.jpg";
import d from "./../images/d.jpg";

const Slides = () => {
  let [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current > 2) {
      setCurrent(0);
    } else if (current < 0) {
      setCurrent(2);
    }
  }, [current]);

  setTimeout(() => {
    setCurrent(++current);
  }, 5000);

  const images = [a, c, d];
  const slogan = [
    "যৌতুক এক সামাজিক ব্যাধি",
    "বাল্যবিবাহ একটি দন্ডনীয় অপরাধ",
    "যথাসময়ে বিবাহ নিবন্ধন বাধ্যতামূলক",
  ];

  return (
    <section className="">
      <div className="relative mx-auto lg:w-3/4 sm:w-full rounded my-5 bg-slate-100 ">
        <div className="fade overflow-hidden h-96">
          <img
            className=" rounded-md w-full"
            src={images[current]}
            alt="cover"
          />
          <div className="text-white absolute bottom-2 lg:text-5xl md:text-5xl text-3xl text-center lg:w-full md:w-full md:left-0 lg:left-0 h-full flex items-center justify-center w-11/12 mx-auto left-3">
            <h1>{slogan[current]}</h1>
          </div>
        </div>

        {/* left button */}
        <span
          className="prev cursor-pointer absolute top-2/4 w-auto text-white p-4 -mt-6 font-bold text-lg select-none rounded-r-md  hover:bg-slate-50 hover:text-red-500"
          onClick={() => setCurrent(--current)}
        >
          ❮
        </span>

        {/* right button */}
        <span
          className="next cursor-pointer absolute top-2/4 w-auto text-white p-4 -mt-6 font-bold text-lg select-none right-0 rounded-l-md hover:bg-slate-50 hover:text-red-500"
          onClick={() => setCurrent(++current)}
        >
          ❯
        </span>
      </div>
    </section>
  );
};

export default Slides;
