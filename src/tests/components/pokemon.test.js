import { render, screen } from "@testing-library/react";
import Pokemon from "../../components/Pokemon";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";

beforeEach(() => {
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
});

describe("Pokemon Component", () => {
  test("Should render name of pokemon from data", () => {
    expect(screen.getByText("Arbok")).toBeInTheDocument();
  });
  test("Should render image on src", () => {
    const src = screen.getByRole("img").getAttribute("src");
    expect(src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    );
  });
});
