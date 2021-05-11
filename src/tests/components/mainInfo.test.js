import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

import store from "../../redux";
import MainInfo from "../../pages/PokeDetails/components/MainInfo";

beforeEach(() => {
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
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/3"]} initialIndex={1}>
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
    </Provider>
  );
});
describe("MainPage testing", () => {
  test("Should Render Venusaur page at '/3' ", async () => {
    await waitFor(() => {
      expect(screen.getByText("Venusaur")).toBeInTheDocument();
    });
  });
});
