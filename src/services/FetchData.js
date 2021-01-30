import { useEffect, useState, useReducer } from "react";
/*eslint-disable */
import axios from "axios";
import pokemon, { all } from "pokemon";
import { useDispatch } from "react-redux";
import fetchFunc from "./fetchFunc";

import dataFetchReducer from "../redux/reducers/dataFetchReducer";
import store from "../redux";

export async function fetchPokemonData({ url }) {
  const res = await fetch(url);

  return res.json();
}

const FetchData = (
  initialArr = [...Array(25).keys()]
    .slice(1)
    .map((num) => pokemon.getName(num)),
  initialData = {}
) => {
  const maxSlice = 24;
  const [url, setUrl] = useState(initialArr);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    fetchFunc(url, maxSlice, didCancel, dispatch);

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
