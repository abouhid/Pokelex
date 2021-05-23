import React from "react";
import { useLocation } from "react-router-dom";
import store from "../redux";

const Filter = () => {
  const location = useLocation();
  const { data } = store.getState().dataFetchReducer;

  const categories = [
    "All",
    "Gen I",
    "Gen II",
    "Gen III",
    "Gen IV",
    "Gen V",
    "Gen VI",
    "Gen VII",
    "Gen VIII",
  ];
  const handleFilterChange = (e) => {
    const { value } = e.target;
    store.dispatch({ type: value, payload: data });
  };

  const categoriesOpt = categories.map((cat) => (
    <option key={cat}>{cat}</option>
  ));

  return location.pathname === "/" ? (
    <select
      style={{ marginRight: "10px" }}
      data-testid="select"
      className="select"
      onChange={handleFilterChange}
    >
      {categoriesOpt}
    </select>
  ) : (
    <></>
  );
};

export default Filter;
