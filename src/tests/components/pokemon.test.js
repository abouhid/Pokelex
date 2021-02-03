import { render, screen } from "@testing-library/react";
import Pokemon from "../../components/Pokemon";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";

beforeEach(() => {
  const data = {
    forms: [{ name: "Mew", url: "https://pokeapi.co/api/v2/pokemon-form/24/" }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    },
    name: "Mew",
    id: 151,
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
  test("Should render 'Mew from data", () => {
    expect(screen.getByText("Mew")).toBeInTheDocument();
  });
  test("Should render image of 'Mew' on src", () => {
    const image = screen.getByRole("img").getAttribute("src");
    expect(image).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    );
  });
});
