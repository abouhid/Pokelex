import { useEffect, useState, useReducer } from "react";
/*eslint-disable */
import pokemon from "pokemon";
import fetchFunc from "./fetchFunc";
import store from "../redux";
import dataFetchReducer from "../redux/reducers/dataFetchReducer";

const FetchData = (
  initialArr = [...Array(25).keys()].slice(1),
  // .map((num) => pokemon.getName(num)),
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
  }, [store.getState(), url]);

  return [state, setUrl];
};
export default FetchData;
