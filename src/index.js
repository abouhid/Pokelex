import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
