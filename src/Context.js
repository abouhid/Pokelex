import React, { useState } from "react";
import PropTypes from "prop-types";
import FetchData from "./services/FetchData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = FetchData();
  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };
  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        data,
        isError,
        isLoading,
        doFetch,
        FetchData,
        getNum,
      }}
    >
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
