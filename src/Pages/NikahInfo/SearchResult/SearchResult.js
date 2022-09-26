import React from "react";
import "./result.css";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const SearchResult = ({ data }) => {
  console.log(data.data);

  const inputRef = useRef(null);
  const printDocument = () => {
    var doc = new jsPDF("l", "mm", "a4");
    html2canvas(inputRef.current, { useCORS: true }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var pageHeight = 395;
      var imgWidth = (canvas.width * 50) / 210;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 25;

      doc.addImage(imgData, "PNG", 14, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 14, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      // doc.output('dataurlnewwindow');
      doc.save("Nikah-Nama.pdf");
    });
  };

  return (
    <div className="mt-12">
      <div
        className="border-red-500 border-dashed certificate border-4  mx-auto p-8 "
        id="divToPrint"
        ref={inputRef}
      >
        <div className=" flex items-center h-full">
          <div className="w-full h-min">
            <h1 className="text-center text-red-500 text-3xl  ">
              ডিজিটাল নিকাহ্‌নামা
            </h1>
            <img
              className="h-14 w-32 mx-auto love-lock"
              src="https://i.ibb.co/f8Pg2mn/output-onlinepngtools.png"
              alt="Lock heart"
              crossorigin
            />
            <div className="mt-10">
              <p className=" text-2xl text-center">
                এই মর্মে প্রত্যয়ন করা যাচ্ছে যে,
              </p>
              <div className="flex flex-row mt-8  ">
                <div className="border-r text-right px-6 border-rose-600 w-1/2">
                  <p className=" font-semibold text-xl">
                    {data.data.groom.name_of_national}
                  </p>
                  <div className=" w-full flex justify-end">
                    <div className="w-max ">
                      <p className="font-semibold">
                        {data.data.groom.name_of_father}
                      </p>
                      <p className="text-center">এবং</p>
                      <p>
                        <span className="font-semibold">
                          {data.data.groom.name_of_mother}
                        </span>{" "}
                        এর পুত্র
                      </p>
                    </div>
                  </div>
                  <p>
                    জন্মঃ{" "}
                    <span className="font-semibold sjn">
                      {data.data.bride.date_of_birth}
                    </span>
                  </p>
                  <p>ঠিকানাঃ {data.data.groom.location}</p>
                </div>
                <div className="border-l text-left px-6 border-rose-600 w-1/2">
                  <p className="font-semibold text-xl">
                    {data.data.bride.name_of_national}
                  </p>
                  <div className=" w-full flex justify-start">
                    <div className="w-max ">
                      <p className="font-semibold">
                        {data.data.bride.name_of_father}
                      </p>
                      <p className="text-center">এবং</p>
                      <p>
                        <span className="font-semibold">
                          {data.data.bride.name_of_mother}
                        </span>{" "}
                        এর কন্যা
                      </p>
                    </div>
                  </div>
                  <p>
                    জন্মঃ{" "}
                    <span className="font-semibold sjn">
                      {data.data.bride.date_of_birth}
                    </span>
                  </p>
                  <p>ঠিকানাঃ {data.data.bride.location}</p>
                </div>
              </div>

              <div className="  grid grid-cols-4 gap-4">
                <div className="">
                  
                </div>

                <div className="col-span-3  pl-5 flex justify-between">
                  <div className=" mt-6 ">
                    <p className="text-center text-xl">
                      উভয়ে বিবাহ বন্ধনে আবদ্ধ হয়েছেন
                    </p>
                    <p className="text-center text-lg sjn">
                      তারিখঃ {data.data.dates.registered}
                    </p>
                    <p className="text-center text-lg">
                      স্থানঃ নোয়াখালী, নোয়াখালী সদর, নোয়াখালী, চট্টগ্রাম বিভাগ
                    </p>
                  </div>

                  <div className="h-48 w-48 overflow-hidden ">
                    <img
                      src="https://i.ibb.co/QXRRtsr/pngwing-com.png"
                      alt="pngwing-com"

                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* <div className="bg-img1">
          <img
            src="https://i.ibb.co/Y2DWzB1/pngwing-com.png"
            alt="pngwing-com"
            border="0"
          />
        </div>
        <div className="bg-img2">
          <img
            src="https://i.ibb.co/VTjZF8q/pngwing-com.png"
            alt="pngwing-com"
            border="0"
          />
        </div> */}

      </div>

      <div className="mt-5 flex justify-center">
        <button
          onClick={printDocument}
          className="bg-rose-700 px-5 py-2 text-white rounded"
        >
          নিকাহ্‌নামা সংগ্রহ করুন
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
