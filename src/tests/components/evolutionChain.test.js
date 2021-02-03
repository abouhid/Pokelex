import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../App";

import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import EvolutionChain from "../../components/EvolutionChain";

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
        <ContextProvider>
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
        </ContextProvider>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Charizard")).toBeInTheDocument();
    });
  });
});
