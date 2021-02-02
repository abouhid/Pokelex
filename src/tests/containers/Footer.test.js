import { render, screen } from "@testing-library/react";
import Footer from "../../containers/Footer";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";

beforeEach(() => {
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <Footer />
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("Footer Container", () => {
  test("Should have footer Logos ", () => {
    expect(
      "https://www.flaticon.com/svg/vstatic/svg/188/188990.svg?token=exp=1611772001~hmac=6aff5a6fb4de0961a6c263186e6467ce"
    ).toBeInTheDocument();
  });
});
// https://www.flaticon.com/svg/vstatic/svg/188/188990.svg?token=exp=1611772001~hmac=6aff5a6fb4de0961a6c263186e6467ce
