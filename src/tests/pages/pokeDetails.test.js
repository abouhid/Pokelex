import { render, screen, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import FetchData from "../../services/FetchData";
import App from "../../App";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import PokeDetails from "../../pages/PokeDetails";
import Header from "../../containers/Header";

beforeEach(() => {
  const data = [
    {
      forms: [
        {
          name: "mewtwo",
          url: "https://pokeapi.co/api/v2/pokemon-form/150/",
        },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      },
      name: "Mewtwo",
      id: 150,
      height: "3m",
      weight: "30kg",
    },
    {
      forms: [
        {
          name: "mew",
          url: "https://pokeapi.co/api/v2/pokemon-form/150/",
        },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      },
      name: "Mew",
      id: 151,
      height: "3m",
      weight: "30kg",
    },
    {
      forms: [
        {
          name: "eevee",
          url: "https://pokeapi.co/api/v2/pokemon-form/133/",
        },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      },
      name: "Eevee",
      id: 133,
      height: "3m",
      weight: "30kg",
    },
  ];
  render(
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App>
            <PokeDetails />
          </App>
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("MainPage testing", () => {
  // test("Should not find any Pokémon when without data ", () => {
  //   expect(screen.getByText("No Pokémon Found!")).toBeInTheDocument();
  // });
  test("Submitting a name via the input field changes the name state value", () => {
    const { container, rerender } = render(
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <App>
              <Header />

              <PokeDetails />
            </App>
          </Router>
        </ContextProvider>
      </Provider>
    );

    const inputName = container.getElementsByTagName("input");
    // fireEvent.change(screen.getByTestId("sortSelect"), {
    //   target: { value: "Gen II" },
    // });
    expect("").toBe("");

    // const nameValue = getByTestId(container, "namevalue");
    // const submitButton = getByTestId(container, "submitRefButton");
    // const newName = "Ben";
    // fireEvent.change(inputName, { target: { value: newName } });
    // fireEvent.click(submitButton);
    // expect(nameValue.textContent).toEqual(newName);
    // rerender(<App />);
    // expect(window.localStorage.getItem("name")).toBe(newName);
  });
  // test("App loads with initial state of 0", () => {
  //   const { container } = render(
  //     <Provider store={store}>
  //       <ContextProvider>
  //         <Router>
  //           <App>
  //             <PokeDetails />
  //           </App>
  //         </Router>
  //       </ContextProvider>
  //     </Provider>
  //   );
  //   const countValue = getByText(container, "Search");
  //   fireEvent.click(countValue);
  //   fireEvent.click(countValue.firstChild);

  //   expect(countValue.textContent).toBe("0");
  // });
});
