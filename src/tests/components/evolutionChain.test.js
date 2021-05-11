import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

import store from "../../redux";
import EvolutionChain from "../../pages/PokeDetails/components/EvolutionChain";

describe("MainPage testing", () => {
  test("Should Render Charizard page at '/6' ", async () => {
    const evolution = [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "charmander",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "charmeleon",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "charizard",
    ];
    const getNum = (url) => {
      const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
      return el;
    };
    const pokemonId = "6";
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/6"]} initialIndex={1}>
          {" "}
          <App>
            <EvolutionChain
              evolution={evolution}
              pokemonId={pokemonId}
              getNum={getNum}
            />
          </App>
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Charizard")).toBeInTheDocument();
    });
  });
});
