/*eslint-disable */
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import pokemon from "pokemon";
import fetchFunc from "./fetchFunc";
import dataFetchReducer from "../redux/reducers/dataFetchReducer";
export async function fetchPokemonData({ url }) {
  const res = await fetch(url);

  return res.json();
}

const FetchData = (
  initialArr = [...Array(13).keys()]
    .slice(1)
    .map((num) => pokemon.getName(num)),
  initialData = {}
) => {
  const maxSlice = 12;
  const [url, setUrl] = useState(initialArr);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    fetchFunc(url, maxSlice, dispatch, didCancel);

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
