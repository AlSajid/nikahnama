import React, { useEffect, useRef, useState } from "react";

const Conditions = () => {
  const [condition, setCondition] = useState([]);
  const [conditions, setConditions] = useState(
    JSON.parse(localStorage.getItem("conditions"))
  );

  const ref = useRef(null);
  const addConditions = () => {
    if (condition.length > 0) {
      if (conditions === null) {
        setConditions([condition]);
      } else {
        setConditions([condition, ...conditions]);
      }
      localStorage.setItem(
        "conditions",
        JSON.stringify([...conditions, condition])
      );
      ref.current.value = "";
      ref.current.focus();
    }
  };

  const deleteCondition = (serial) => {
    const newConditions = conditions.filter((condition) => {
      // console.log(condition);
      // console.log(condition[serial]);
      return condition !== conditions[serial];
    });

    setConditions(newConditions);

    localStorage.setItem(
      "conditions",
      JSON.stringify(newConditions)
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addConditions();
    }
  };

  // console.log(JSON.parse(localStorage.getItem("conditions")));

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <label className="text-center my-3">
          বিশেষ শর্তাবলি- <br /> <span className="text-sm">(যদি থাকে)</span>
        </label>
        <input
          ref={ref}
          onChange={(e) => setCondition(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-2/3 my-3 p-1 border-b-2 text-lg border-dashed focus:outline-0 appearance-none"
          autoFocus
        ></input>
        <button
          onClick={addConditions}
          className="border-2 bg-slate-50 p-3 border-dashed my-3 rounded"
        >
          যোগ করুন
        </button>
      </div>
      {conditions?.length > 0 && (
        <div className="overflow-auto  max-h-48 my-3">
          <table className="w-full mx-auto bg-slate-50">
            <tbody>
              {conditions.map((condition, serial = 1) => (
                <tr className="border-b my-3" key={condition}>
                  <td className="p-3 relative">
                    <span className="sjn">{serial + 1}.</span> {" " + condition}
                    <span
                      className="absolute right-3 top-0 cursor-pointer text-3xl "
                      onClick={() => deleteCondition(serial)}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Conditions;
