import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Location from "./Location";

const Participants = ({ type }) => {
  const [nid, setNID] = useState(localStorage.getItem(`${type}-nid`));
  const [birthDate, setBirthDate] = useState(
    localStorage.getItem(`${type}-birthDate`)
  );
  const [information, setInformation] = useState(
    JSON.parse(localStorage.getItem(`${type}-information`))
  );
  const [loader, setLoader] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem(`${type}-information`, JSON.stringify(information));
  }, [information, type]);


  const nidLookUp = () => {
    setLoader("জাতীয় তথ্য ভান্ডারে খোঁজা হচ্ছে");

    const url = "http://localhost:5000/nid";

    const data = {
      nid: nid,
      dob: birthDate,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json !== 'false') {
          setError(null)
          setInformation(json)
        }
        else{
          setError('কোনও তথ্য পাওয়া যায়নি');
        }
        setLoader("");
      })
      .catch((error) => {
        setLoader("");
        setError(error);
        console.error("error:" + error)
      });
  };



  const handleKeyDown = (event) => {
    if (event.key === "Enter") {

      nidLookUp();
    }
  };

  let text;
  // eslint-disable-next-line default-case
  switch (type) {
    case "groom":
      text = "বরের";
      break;
    case "bride":
      text = "কনের";
      break;
    case "witness1":
      text = "১নং সাক্ষীর";
      break;
    case "witness2":
      text = "২নং সাক্ষীর";
      break;
    case "kazi":
      text = "কাজির";
      break;
  }

  return (
    <div>
      <div className="flex my-1 justify-around">
        {/* nid no */}

        <div className="p-3 m-1 w-full">
          <label>{text} জাতীয় পরিচয়পত্রের নম্বর</label>
          <input
            type="number"
            value={nid}
            className="text-xl sjn w-full p-3 border-b-2 border-dashed text-right focus:outline-0 appearance-none h-10"
            maxLength="17"
            onChange={(e) => {
              setNID(e.target.value);
              localStorage.setItem(`${type}-nid`, e.target.value);
            }}
          ></input>
        </div>

        {/* birth date */}
        <div className="p-3 m-1 w-full">
          <label>{text} জন্মতারিখ</label>
          <input
            type="date"
            defaultValue={"2000-01-01"}
            value={birthDate}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setBirthDate(e.target.value);
              localStorage.setItem(`${type}-birthDate`, e.target.value);
            }}
            className="text-xl w-full sjn p-3 text-right focus:outline-0 appearance-none h-10 border-b-2 border-dashed"
          ></input>
        </div>

        <div className="w-full justify-center text-center flex items-center">
          {error && <p className="text-red-500">{error}</p>}
          {loader === "" ? (
            <button
              className="border w-1/2 h-1/2 items-center rounded bg-slate-100 hover:bg-stone-300 "
              onClick={() => nidLookUp()}
            >
              যাচাইকরণ
            </button>
          ) : (
            <Loader text={loader} />
          )}
        </div>
      </div>

      {information?.name_of_national && (
        <div>
          <div className="flex flex-wrap my-3">
            <div className="w-1/3 p-3">
              <label className="text-center">{text} নাম</label>
              <input
                className="w-full p-3 border-b-2 border-dashed focus:outline-0 appearance-none"
                value={information?.name_of_national}
                readOnly
              ></input>
            </div>

            <div className="w-1/3 p-3">
              <label className="text-center">{text} পিতার নাম</label>
              <input
                className="w-full p-3 border-b-2 border-dashed focus:outline-0 appearance-none"
                value={information?.name_of_father}
                readOnly
              ></input>
            </div>

            <div className="w-1/3 p-3">
              <label className="text-center">{text} মাতার নাম</label>
              <input
                className="w-full p-3 border-dashed border-b-2 focus:outline-0 appearance-none"
                value={information.name_of_mother}
                readOnly
              ></input>
            </div>
          </div>
          <div className="w-full mx-3">
            <label className="text-center">{text} ঠিকানা</label>
            <Location type={type} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Participants;
