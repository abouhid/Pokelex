/*eslint-disable*/
import React, { useContext, useReducer } from "react";
import { Context } from "../Context";
import { useLocation } from "react-router-dom";
import pokemon, { all } from "pokemon";
import filterGen from "../redux/actions";
import genReducer from "../redux/reducers/genReducer";
import { useDispatch } from "react-redux";
import store from "../redux";

const Filter = () => {
  let location = useLocation();
  const { data, setUrl, FetchData, setSearch } = useContext(Context);
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
    "Gen VII",
  ];
  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch({ type: value, payload: data });
    // const selectedGen = store.getState().genReducer;
    // const filterArr = data
    //   .filter((el) => el.id > selectedGen[0] && el.id < selectedGen[1])
    //   .map((el) => pokemon.getName(el.id).toLowerCase());
    setSearch(store.getState().genReducer);
  };

  console.log(store.getState().genReducer, "filter");
  const categoriesOpt = categories.map((cat, index) => (
    <option key={index}>{cat}</option>
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
