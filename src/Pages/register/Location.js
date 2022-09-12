import JsonQuery from "json-query";
import React, { useEffect, useState } from "react";

const Location = ({ type, setLocation }) => {
  const [division, setDivision] = useState(
    localStorage.getItem(`${type}-division`)
  );
  const [divisions, setDivisions] = useState();

  const [district, setDistrict] = useState(
    localStorage.getItem(`${type}-district`)
  );
  const [districts, setDistricts] = useState();

  const [upazila, setUpazila] = useState(
    localStorage.getItem(`${type}-upazila`)
  );
  const [upazilas, setUpazilas] = useState();

  const [union, setUnion] = useState(localStorage.getItem(`${type}-union`));
  const [unions, setUnions] = useState();

  const [ward, setWard] = useState(localStorage.getItem(`${type}-ward`));

  useEffect(() => {
    if (districts && divisions && unions && upazilas && ward) {
      localStorage.setItem(
        `${type}-location`,
        `${JsonQuery(`[*id=${union}][bn_name]`, { data: unions }).value[0]}, ${JsonQuery(`[*id=${upazila}][bn_name]`, { data: upazilas }).value[0]}, ${JsonQuery(`[*id=${district}][bn_name]`, { data: districts })
          .value[0]}, ${JsonQuery(`[*id=${division}][bn_name]`, { data: divisions })
            .value[0]} বিভাগ`
      );
    }
  }, [district, division, union, upazila, ward]);

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
    <div className="my-5 ">
      <div className="flex h-12 justify-around">
        <div className="border w-full mx-3">
          <select
            id="select_page"
            className="w-full h-full text-center"
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              localStorage.setItem(`${type}-division`, e.target.value);
            }}
          >
            {}
            <option>বিভাগ</option>

            {divisions?.map((division) => (
              <option key={division.id} value={division.id}>
                {division.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className=" border w-full mx-3">
          <select
            id="select_page"
            className="w-full h-full text-center"
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              localStorage.setItem(`${type}-district`, e.target.value);
            }}
          >
            <option value="">জেলা</option>
            {districts?.map((district) => (
              <option key={district.id} value={district.id}>
                {district.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className=" border w-full mx-3">
          <select
            id="select_page"
            className="w-full h-full text-center"
            value={upazila}
            onChange={(e) => {
              setUpazila(e.target.value);
              localStorage.setItem(`${type}-upazila`, e.target.value);
            }}
          >
            <option value="">উপজেলা</option>
            {upazilas?.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>
                {upazila.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className=" border w-full mx-3">
          <select
            id="select_page"
            className="w-full h-full text-center"
            value={union}
            onChange={(e) => {
              setUnion(e.target.value);
              localStorage.setItem(`${type}-union`, e.target.value);
            }}
          >
            <option value="">ইউনিয়ন</option>
            {unions?.map((union) => (
              <option key={union.id} value={union.id}>
                {union.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className="border w-full mx-3">
          <input
            type="number"
            value={ward}
            onChange={(e) => {
              setWard(e.target.value);
              localStorage.setItem(`${type}-ward`, e.target.value);
            }}
            className="h-full text-center text-xl sjn w-full"
            min="0"
            placeholder="IqvW©"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
