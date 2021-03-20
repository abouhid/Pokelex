import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContextProvider } from "../../Context";

import App from "../../App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux";

test("renders the correct content", () => {
  const root = document.createElement("div");

  ReactDOM.render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </Provider>,
    root
  );

  expect(root.querySelector("a").textContent).toBe("PokéLex");
});
