import JsonQuery from "json-query";
import React, { useEffect, useState } from "react";

const Location = () => {
  const [division, setDivision] = useState();
  const [divisions, setDivisions] = useState();

  const [district, setDistrict] = useState();
  const [districts, setDistricts] = useState();

  const [upazila, setUpazila] = useState();
  const [upazilas, setUpazilas] = useState();

  const [union, setUnion] = useState();
  const [unions, setUnions] = useState();

  const [ward, setWard] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/divisions/divisions.json"
    )
      .then((response) => response.json())
      .then((data) => setDivisions(data[2].data));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/districts/districts.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setDistricts(
          JsonQuery(`data[*division_id=${division}]`, { data: data[2] }).value
        )
      );
  }, [division]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/upazilas/upazilas.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setUpazilas(
          JsonQuery(`data[*district_id=${district}]`, { data: data[2] }).value
        )
      );
  }, [district]);

  useEffect(() => {
    console.log(upazila);
    fetch(
      "https://raw.githubusercontent.com/nuhil/bangladesh-geocode/master/unions/unions.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setUnions(
          JsonQuery(`data[*upazilla_id=${upazila}]`, { data: data[2] }).value
        )
      );
  }, [upazila]);

  return (
    <div className="p-3 m-3 ">
      <label className="text-center font-semibold text-3xl my-3">
        যেখানে বিবাহ কার্য নিষ্পন্ন হয়েছে
      </label>
      <div className="flex flex-row">
        <div className="w-1/5 border p-3 mx-1">
          <select
            id="select_page"
            className="w-full "
            onChange={(e) => setDivision(e.target.value)}
          >
            {}
            <option value="" className="bg-red-200">
              বিভাগ
            </option>

            {divisions?.map((division) => (
              <option key={division.id} value={division.id}>
                {division.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/5 border p-3 mx-1">
          <select
            id="select_page"
            className="w-full "
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">জেলা</option>
            {districts?.map((district) => (
              <option key={district.id} value={district.id}>
                {district.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/5 border p-3 mx-1">
          <select
            id="select_page"
            className="w-full "
            onChange={(e) => setUpazila(e.target.value)}
          >
            <option value="">উপজেলা</option>
            {upazilas?.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>{upazila.bn_name}</option>
            ))}
          </select>
        </div>

        <div className="w-1/5 border p-3 mx-1">
          <select
            id="select_page"
            className="w-full "
            onChange={(e) => setUnion(e.target.value)}
          >
            <option value="">ইউনিয়ন</option>
            {unions?.map((union) => (
              <option key={union.id} value={union.id}>{union.bn_name}</option>
            ))}
          </select>
        </div>

        <div className="w-1/5 border p-3 mx-1">
          <input type={"text"} onChange={(e) => setWard(e.target.value)} width="w-1/2"placeholder="ওয়ার্ড"/>
        </div>

      </div>
    </div>
  );
};

export default Location;
