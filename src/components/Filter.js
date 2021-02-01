/*eslint-disable */
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Context } from "../Context";
import getGen from "../services/getGen";
import genReducer from "../redux/reducers/genReducer";
import store from "../redux";

const Filter = () => {
  const location = useLocation();
  const { data, query, setUrl } = useContext(Context);
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
    if (document.getElementsByTagName("input")[0].value !== "") {
      dispatch({ type: value, payload: data.map((el) => el.id) });
      setUrl(data.map((el) => el.id));

      dispatch({ type: value, payload: data });

      // document.getElementsByTagName("input")[0].value = "";
    }
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
