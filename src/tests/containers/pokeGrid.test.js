import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import PokeGrid from "../../pages/MainPage/containers/PokeGrid";
import store from "../../redux";

beforeEach(() => {
  const data = [
    {
      types: [{ name: "Mewtwo", type: { name: "Mewtwo" } }],

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
      types: [{ name: "Mew", type: { name: "Mew" } }],

      forms: [
        {
          name: "mew",
          url: "https://pokeapi.co/api/v2/pokemon-form/151/",
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
      types: [{ name: "Eevee", type: { name: "Eevee" } }],

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
      <Router>
        <PokeGrid data={data} />{" "}
      </Router>
    </Provider>
  );
});

describe("PokeGrid Container", () => {
  test("Should Render 'Mewtwo', 'Mew' and 'Eevee' in the Grid ", () => {
    expect(screen.getByText("Nº 150 Mewtwo")).toBeInTheDocument();
    expect(screen.getByText("Nº 151 Mew")).toBeInTheDocument();
    expect(screen.getByText("Nº 133 Eevee")).toBeInTheDocument();
  });
  test("Should Render the 3 images of 'Mewtwo', 'Mew' and 'Eevee' in the Grid ", () => {
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
