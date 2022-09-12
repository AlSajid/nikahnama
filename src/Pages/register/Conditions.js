import React, { useRef, useState } from "react";

const Conditions = () => {
  const [condition, setCondition] = useState([]);
  const [conditions, setConditions] = useState([
    JSON.parse(localStorage.getItem("conditions")),
  ]);

  const ref = useRef(null);
  const handleClick = () => {
    setConditions([condition, ...conditions]);
    localStorage.setItem(
      "conditions",
      JSON.stringify([condition, ...conditions])
    );
    ref.current.value = "";
    ref.current.focus();
  };

  return (
    <div className="">
      <div className="w-4/5  mx-auto">
        <div className="flex justify-around">
          <label className="text-center my-3">
            বিশেষ শর্তাবলি- <br /> <span className="text-sm">(যদি থাকে)</span>
          </label>
          <input
            ref={ref}
            onChange={(e) => setCondition(e.target.value)}
            className="w-2/4 my-3 p-3 border-b-2 text-lg border-dashed focus:outline-0 appearance-none"
            autoFocus
          ></input>
          <button
            onClick={handleClick}
            className="border-2 bg-slate-50 w-1/4 my-3"
          >
            যোগ করুন
          </button>
        </div>
        {conditions?.length > 0 && (
          <div className="overflow-y-scroll max-h-48 my-3">
            <table className="w-full mx-auto bg-slate-50">
              <tbody>
                {conditions.map((condition) => (
                  <tr className="border-b my-3" key={condition}>
                    <td className="p-3">{condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Conditions;
