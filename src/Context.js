import React, { useState } from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [item] = useState(1);
  return <Context.Provider value={item}>{children}</Context.Provider>;
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
