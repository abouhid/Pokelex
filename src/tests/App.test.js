import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import store from "../redux";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
});

test("Should check logo Name", () => {
  expect(screen.getByText("PokéLex")).toBeInTheDocument();
});
test("Should check presence of Filter", () => {
  const filter = screen.getByDisplayValue("All");
  expect(filter).toBeInTheDocument();
});
