import React from "react";
import SearchParams from "./SearchParams";
import "./style.css";

const Data = function () {
  return (
    <div className="wrapper">
      <div className="one">
        <h1>Data View 1</h1>
        <SearchParams />
      </div>

      <div className="two">
        <h1>Data View 2</h1>
        <SearchParams />
      </div>

      <div className="three">
        <h1>Data View 3</h1>
        <SearchParams />
      </div>

      <div className="four">
        <h1>Data View 4</h1>
        <SearchParams />
      </div>
    </div>
  );
};

export default Data;
