/*eslint-disable */

import axios from "axios";
import pokemon from "pokemon";
import changeReducer from "../redux/reducers/changeReducer";
import { useReducer } from "react";
import changePage from "../redux/actions";
import store from "../redux/store";

const fetchChangePage = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon
    .getName(id)
    .toLowerCase()}`;

  const pokeData = await axios(url);

  store.dispatch(changePage(pokeData));
  console.log(pokeData, "pokedata");
  return pokeData;
};

export default fetchChangePage;
