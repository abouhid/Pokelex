import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Context } from "../Context";

const Filter = () => {
  const location = useLocation();
  const { data, setUrl } = useContext(Context);
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
    }
  };

  const categoriesOpt = categories.map((cat) => (
    <option key={cat}>{cat}</option>
  ));

  return location.pathname === "/" ? (
    <select
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
