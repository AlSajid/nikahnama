import React from "react";

const Groom = () => {
  const storeNIDinfo = (info) => {
    fetch("https://eyafi.pythonanywhere.com/account/nidinfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: '{"nid":"6915127598","dob":"2000-10-01"}',
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((err) => console.error("error:" + err));
  };

  //const url = "https://national-id-verification-bangladesh.p.rapidapi.com/api/nid-check";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5a60f7cc0bmsh62a09dd7c5606a5p1e2094jsn3544c0a96219",
      "X-RapidAPI-Host": "national-id-verification-bangladesh.p.rapidapi.com",
    },
    body: '{"nid":"6915127598","dob":"2000-10-01"}',
  };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => storeNIDinfo(json))
  //   .catch((err) => console.error("error:" + err));

  return (
    <div className="p-3 m-3 border">
      <label className="text-center font-semibold">বরের নাম</label>
      <input className="w-full p-3 border-b-10 border-dotted h-1"></input>

      <label className="text-center font-semibold">বরের পিতার নাম</label>
      <input className="w-full p-3 my-3 border-b-2"></input>

      <label className="text-center font-semibold">বরের মাতার নাম</label>
      <input className="w-full p-3 my-3 border-b-2"></input>

      <label className="text-center font-semibold">বরের ঠিকানা</label>
      <input className="w-full p-3 my-3 border-b-2"></input>
    </div>
  );
};

export default Groom;
