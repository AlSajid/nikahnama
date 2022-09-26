import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SearchResult from "./SearchResult/SearchResult";

const LookUp = () => {
  let { nid } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const url = "https://odd-stockings-newt.cyclic.app/lookUp";
    fetch(url, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ person: nid }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      });
  }, [nid]);

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        {result.map((item) => (
          <SearchResult data={item} key={item.hash} />
        ))}
      </div>
    </div>
  );
};

export default LookUp;
