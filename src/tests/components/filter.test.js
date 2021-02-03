import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import Filter from "../../components/Filter";

beforeEach(() => {
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <Filter />
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("Footer Container", () => {
  test("Should have 'All' selected ", () => {
    const filter = screen.getByText("All");
    expect(filter).toBeInTheDocument();
  });
  test("Should change value of filter", () => {
    const filter = screen.getByText("All");
    fireEvent.change(filter, { target: { value: "Gen II" } });
    expect(filter.value).toBe("Gen II");
  });
});
