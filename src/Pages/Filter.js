import React, { useEffect, useState } from "react";

const Filter = () => {
  const [districts, setDistricts] = useState();

  useEffect(() => {
    fetch("districts.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {
        // districts.map(district => <h1>{district}</h1>)
      }
    </div>
  );
};

export default Filter;
