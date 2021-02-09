import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Pokemon from "../../components/Pokemon";
import store from "../../redux";

beforeEach(() => {
  const data = {
    types: [{ name: "Mew", type: { name: "Mew" } }],
    forms: [
      { name: "Mew", url: "https://pokeapi.co/api/v2/pokemon-form/151/" },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    },
    name: "Mew",
    id: 151,
    height: "3m",
    weight: "30kg",
  };
  render(
    <Provider store={store}>
      <Router>
        <Pokemon data={data} />
      </Router>
    </Provider>
  );
});

describe("Pokemon Component", () => {
  test("Should render 'Mew from data", async () => {
    await waitFor(() => {
      expect(screen.getByText("Nº 151 Mew")).toBeInTheDocument();
    });
  });
  test("Should render image of 'Mew' on src", () => {
    const image = screen.getByRole("img").getAttribute("src");
    expect(image).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    );
  });
});
