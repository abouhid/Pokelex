/*eslint-disable */
import { useEffect, useState, useReducer } from "react";
import fetchFunc from "./fetchFunc";
import { useDispatch } from "react-redux";

import store from "../redux";
import dataFetchReducer from "../redux/reducers/dataFetchReducer";

const FetchData = (
  initialArr = [...Array(25).keys()].slice(1),
  initialData = {}
) => {
  const [url, setUrl] = useState(initialArr);
  const dispatch = useDispatch();

  useEffect(() => {
    const ac = new AbortController();
    fetchFunc(url, dispatch);
    return () => ac.abort();
  }, [store.getState(), url]);

  return [setUrl];
};
export default FetchData;
