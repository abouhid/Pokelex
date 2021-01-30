/*eslint-disable*/
import React, { useContext } from "react";
import { Context } from "../Context";
import { useLocation } from "react-router-dom";
import pokemon, { all } from "pokemon";
import filterGen from "../redux/actions";

const Filter = () => {
  let location = useLocation();
  const { data, setUrl } = useContext(Context);
  const categories = [
    "Gen I",
    "Gen II",
    "Gen III",
    "Gen IV",
    "Gen V",
    "Gen VI",
  ];
  const handleFilterChange = (e) => {
    const { value } = e.target;
    // filteredBooks = dispatch(changeFilter(value)).payload;
    console.log(data);
    const filterArr = data
      .filter((el) => el.id > 151 && el.id < 450)
      .map((el) => pokemon.getName(el.id).toLowerCase());

    setUrl(filterArr);
  };

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
