import React, { useState } from "react";
import PropTypes from "prop-types";
import FetchData from "./services/FetchData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [{ data }, setUrl] = FetchData();
  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };
  const getImg = (num) => {
    const el = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
    return el;
  };
  const getName = (num) => {
    const el = num;
    return el;
  };
  return (
    <Context.Provider
      value={{
        data,
        setUrl,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        FetchData,
        getNum,
        getImg,
        getName,
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
