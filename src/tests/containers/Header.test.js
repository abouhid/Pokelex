import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import Header from "../../containers/Header";

beforeEach(() => {
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <Header />{" "}
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("PokeGrid Container", () => {
  test("Should Render 'Mewtwo', 'Mew' and 'Eevee' in the Grid ", () => {
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
  test("Should check logo presence", () => {
    expect(screen.getByText("PokéLex")).toBeInTheDocument();
  });
  test("Should check presence of Filter", () => {
    const filter = screen.getByDisplayValue("All");
    expect(filter).toBeInTheDocument();
  });
});
