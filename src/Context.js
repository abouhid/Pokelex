import React, { useState } from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [query, setQuery] = useState("");
  return (
    <Context.Provider value={{ query, setQuery }}>{children}</Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
