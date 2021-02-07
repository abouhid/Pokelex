import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// import store from "../redux";

const FetchData = (initialArr = [...Array(25).keys()].slice(1)) => {
  const [url, setUrl] = useState(initialArr);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const ac = new AbortController();

    const fetchFunc = async () => {
      dispatch({ type: "FETCH_INIT" });
      if (url !== "All") {
        const newUrl = url.map(
          (el) => `https://pokeapi.co/api/v2/pokemon/${el}`
        );
        try {
          const pokeData1 = await Promise.all(
            newUrl.map(async (el) => axios(el))
          );
          const pokeData = pokeData1.map((el) => el.data);
          if (location.pathname === "/") {
            dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
          }
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchFunc();

    return () => ac.abort();
  }, [url]);

  return [setUrl];
};
export default FetchData;
