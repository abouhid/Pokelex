import { render, screen, waitFor } from "@testing-library/react";
import MainPage from "../../pages/MainPage";
import { Provider } from "react-redux";
import FetchData from "../../services/FetchData";
import App from "../../App";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";

beforeEach(() => {
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App>
            <MainPage />
          </App>
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("MainPage testing", () => {
  test("Should not find any Pokémon befire the API call", () => {
    expect(screen.getByText("No Pokémon Found!")).toBeInTheDocument();
  });
  test("Should find 'Arbok' when first rendered ", async () => {
    await waitFor(() => {
      expect(screen.getByText("Arbok")).toBeInTheDocument();
    });
  });
});
