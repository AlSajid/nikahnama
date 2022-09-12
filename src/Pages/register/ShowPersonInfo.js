import React from "react";

const ShowPersonInfo = ({ type, data }) => {
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
    <table className="w-full p-5 border-2 my-3">
      <tbody>
        <tr className="border">
          <td className="p-3 border w-1/4" rowSpan={4}>
            {text} তথ্য
          </td>
          <td className="p-3 w-1/4">জাতীয় পরিচয় পত্রের নম্বর</td>
          <td className="p-3 sjn">{data.nid_number}</td>
        </tr>
        <tr className="border">
          <td className="p-3">নাম</td>
          <td className="p-3">{data.name_of_national}</td>
        </tr>
        <tr className="border">
          <td className="p-3">পিতার নাম</td>
          <td className="p-3">{data.name_of_father}</td>
        </tr>
        <tr className="border">
          <td className="p-3">মাতার নাম</td>
          <td className="p-3">{data.name_of_mother}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShowPersonInfo;
