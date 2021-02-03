import { useEffect, useState, useReducer } from "react";
import fetchFunc from "./fetchFunc";
import store from "../redux";
import dataFetchReducer from "../redux/reducers/dataFetchReducer";

const FetchData = (
  initialArr = [...Array(25).keys()].slice(1),
  initialData = {}
) => {
  const [url, setUrl] = useState(initialArr);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const ac = new AbortController();

    fetchFunc(url, dispatch);

    return () => ac.abort();
  }, [store.getState(), url]);

  return [state, setUrl];
};
export default FetchData;
