import { useEffect, useState, useReducer } from "react";
import axios from "axios";
/*eslint-disable */
import pokemon, { all } from "pokemon";
import { useDispatch } from "react-redux";

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
  // const dispatch = useDispatch();

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      // console.log(store.dispatch({ type: "FETCH_INIT" }), "saaaa");
      // dispatch({ type: "FETCH_INIT" });
      dispatch({ type: "FETCH_INIT" });

      const newUrl = url
        .slice(0, Math.min(maxSlice, url.length))
        .map((el) => `https://pokeapi.co/api/v2/pokemon/${el.toLowerCase()}`);
      try {
        const pokeData1 = await Promise.all(
          newUrl.map(async (el) => await axios(el))
        );
        const pokeData = pokeData1.map((el) => el.data);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
          // console.log(store.getState().dataFetchReducer.data, "aaa");

          // dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
        }
      } catch (error) {
        if (!didCancel) {
          store.dispatch({
            type: "FETCH_FAILURE",
          });

          // dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);
  // console.log(state, "fora");

  return [state, setUrl];
};
export default FetchData;
