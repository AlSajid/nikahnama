import React from "react";
import Person from "./Person";

const SearchResult = ({ data }) => {
  console.log(data.data);
  return (
    <div className="flex flex-col md:flex-row">
      <Person data={data.data.groom} />
      <Person data={data.data.bride} />
    </div>
  );
};

export default SearchResult;
