import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import MainPage from "../../pages/MainPage/MainPage";
import store from "../../redux";

describe("MainPage testing", () => {
  test("Should find 'Arbok' when first rendered ", async () => {
    const { data, isLoading } = store.getState().dataFetchReducer;
    render(
      <Provider store={store}>
        <Router>
          <App>
            <MainPage data={data} isLoading={isLoading} />
          </App>
        </Router>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Nº 24 Arbok")).toBeInTheDocument();
    });
  });
});
