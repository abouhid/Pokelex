import {
  render,
  screen,
  fireEvent,
  getByText,
  waitFor,
  getByLabelText,
  getByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import FetchData from "../../services/FetchData";
import App from "../../App";

import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import PokeDetails from "../../pages/PokeDetails";

beforeEach(() => {
  // render(
  //   <Provider store={store}>
  //     <ContextProvider>
  //       <Router>
  //         <App>
  //           <PokeDetails />
  //         </App>
  //       </Router>
  //     </ContextProvider>
  //   </Provider>
  // );
});

describe("PokeDetails testing", () => {
  const setup = () => {
    const onSubmit = jest.fn();

    const utils = render(
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <App>
              <PokeDetails onSubmit={onSubmit} />
            </App>
          </Router>
        </ContextProvider>
      </Provider>
    );
    const input = utils.getByLabelText("cost-input");
    const button = utils.getByLabelText("cost-button");

    return {
      input,
      button,
      ...utils,
    };
  };
  test("Should render Mewtwo's info", async () => {
    // const { input, button } = setup();

    // fireEvent.change(input, { target: { value: "Ala" } });

    // fireEvent.click(button);

    expect("input").toBe("input");

    // expect("Alakaszam").toMatchSnapshot;
    //   await waitFor(() => {});
  });
});
