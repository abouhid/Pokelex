import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

describe("MainPage testing", () => {
  test("Should find 'Arbok' when first rendered ", async () => {
    await waitFor(() => {
      expect(screen.getByText("Arbok")).toBeInTheDocument();
    });
  });
  // test("Should change gen and search ", async () => {
  //   await waitFor(() => {
  //     const input = screen.getByLabelText("cost-input");
  //     fireEvent.change(input, { target: { value: "Ala" } });
  //     const search = screen.getByLabelText("cost-button");
  //     // fireEvent.click(search);
  //     const button = screen.getByLabelText("cost-buttons");

  //     expect(button).toBeInTheDocument();
  //   });
  // });
});
