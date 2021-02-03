import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import MainPage from "../../pages/MainPage";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import Header from "../../containers/Header";

beforeEach(() => {
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App>
            <Header />
            <MainPage />
          </App>
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("MainPage testing", () => {
  test("Should find 'Arbok' when first rendered ", async () => {
    await waitFor(() => {
      expect(screen.getByText("Arbok")).toBeInTheDocument();
    });
  });
});
