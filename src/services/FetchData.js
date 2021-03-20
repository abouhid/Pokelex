import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FetchData = (initialArr = [...Array(31).keys()].slice(1)) => {
  const [url, setUrl] = useState(initialArr);
  const dispatch = useDispatch();

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
          dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
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
