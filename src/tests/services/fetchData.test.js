import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import App from "../../App";

import { ContextProvider } from "../../Context";
import store from "../../redux";

describe("fetchData API call testing", () => {
  test("Should render initial array (24 elements) ", async () => {
    const { data, isLoading } = store.getState().dataFetchReducer;
    console.log(data);
    render(
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <App>
              <MainPage data={data} isLoading={isLoading} />
            </App>
          </Router>
        </ContextProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Nº 24 Arbok")).toBeInTheDocument();
    });
  });
});
