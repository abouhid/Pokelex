import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import dataFetchReducer from "../reducers/dataFetchReducer";
/*eslint-disable */
export async function fetchPokemonData({ url }) {
  const res = await fetch(url);

  return res.json();
}

const FetchData = (
  query = ["pikachu", "alakazam"],
  initialArr = "https://pokeapi.co/api/v2/pokemon?limit=12",
  initialData = {}
) => {
  const maxSlice = 12;

  let urlArray = query
    .slice(0, Math.min(maxSlice, query.length))
    .map((el) => `https://pokeapi.co/api/v2/pokemon/${el}`);

  const [url, setUrl] = useState(["pikachu"]);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
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
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
