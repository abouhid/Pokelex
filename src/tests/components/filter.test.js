import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux";
import Filter from "../../common/Filter";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Filter />
      </Router>
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
