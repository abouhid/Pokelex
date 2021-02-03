import { render, screen, waitFor } from "@testing-library/react";
import MainPage from "../../pages/MainPage";
import { Provider } from "react-redux";
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

describe("fetchData API call testing", () => {
  test("Should render initial array (24 elements) ", async () => {
    await waitFor(() => {
      expect(screen.getByText("Arbok")).toBeInTheDocument();
    });
  });
});
