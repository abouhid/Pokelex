import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Context } from "../Context";

import store from "../redux";

const Filter = () => {
  const location = useLocation();
  const { data, setSearch } = useContext(Context);
  const dispatch = useDispatch();
  const categories = [
    "All",
    "Gen I",
    "Gen II",
    "Gen III",
    "Gen IV",
    "Gen V",
    "Gen VI",
    "Gen VII",
  ];
  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch({ type: value, payload: data });
    // fetchFunc(["chikorita", "torchic", "chimchar"], false, dispatch);
    // console.log(store.getState(), "action");

    setSearch(store.getState().genReducer);
  };

  const categoriesOpt = categories.map((cat) => (
    <option key={cat}>{cat}</option>
  ));

  return location.pathname === "/" ? (
    <select className="select" onChange={handleFilterChange}>
      {categoriesOpt}
    </select>
  ) : (
    <></>
  );
};

export default Filter;
