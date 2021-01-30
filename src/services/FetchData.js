import { useEffect, useState, useReducer } from "react";

import pokemon from "pokemon";
import fetchFunc from "./fetchFunc";

import dataFetchReducer from "../redux/reducers/dataFetchReducer";

const FetchData = (
  initialArr = [...Array(25).keys()]
    .slice(1)
    .map((num) => pokemon.getName(num)),
  initialData = {}
) => {
  const [url, setUrl] = useState(initialArr);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    fetchFunc(url, didCancel, dispatch);

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
