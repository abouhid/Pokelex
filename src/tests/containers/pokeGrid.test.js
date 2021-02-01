import { render, screen } from "@testing-library/react";
import Pokemon from "../../components/Pokemon";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import App from "../../App";
import { Context } from "../../Context";

describe("Pokemon Component", () => {
  test("Renders the correct content", () => {
    const data = {
      forms: [
        { name: "arbok", url: "https://pokeapi.co/api/v2/pokemon-form/24/" },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      },
      name: "arbok",
      id: 24,
      height: "3m",
      weight: "30kg",
    };
    render(
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <Pokemon data={data} />{" "}
          </Router>
        </ContextProvider>
      </Provider>
    );

    expect(screen.getByText("Arbok")).toBeInTheDocument();
    // expect(screen.getByText("30kg")).toBeInTheDocument();
  });
});
