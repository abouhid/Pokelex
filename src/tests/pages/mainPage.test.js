import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import MainPage from "../../pages/MainPage";
import { Provider } from "react-redux";
import App from "../../App";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
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
