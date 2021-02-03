import {
  render,
  screen,
  fireEvent,
  getByText,
  wait,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import FetchData from "../../services/FetchData";
import App from "../../App";

import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import PokeDetails from "../../pages/PokeDetails";
import Header from "../../containers/Header";
import MainInfo from "../../components/MainInfo";

describe("MainPage testing", () => {
  test("Should Render Venusaur page at '/3' ", async () => {
    const name = "Venusaur";
    const description =
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.";
    const types = [{ key: "grass" }, { key: "poison" }];
    const pokemonId = "3";
    const data = {
      forms: [
        { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon-form/3/" },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      },
      name: "Venusaur",
      id: 3,
      height: 3,
      weight: 30,
    };
    const { container } = render(
      <Provider store={store}>
        <ContextProvider>
          <MemoryRouter initialEntries={["/3"]} initialIndex={1}>
            {" "}
            <App>
              <MainInfo
                data={data}
                name={name}
                description={description}
                types={types}
                pokemonId={pokemonId}
              />
            </App>
          </MemoryRouter>
        </ContextProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Venusaur")).toBeInTheDocument();
    });
  });
});
