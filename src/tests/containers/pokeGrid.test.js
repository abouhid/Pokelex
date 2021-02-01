import { render, screen } from "@testing-library/react";
import PokeGrid from "../../containers/PokeGrid";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";

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
          <PokeGrid data={data} />{" "}
        </Router>
      </ContextProvider>
    </Provider>
  );
});

describe("PokeGrid Container", () => {
  test("Should Render 'Mewtwo', 'Mew' and 'Eevee' in the Grid ", () => {
    expect(screen.getByText("Mewtwo")).toBeInTheDocument();
    expect(screen.getByText("Mew")).toBeInTheDocument();
    expect(screen.getByText("Eevee")).toBeInTheDocument();
  });
  test("Should Render the 3 images of 'Mewtwo', 'Mew' and 'Eevee' in the Grid ", () => {
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
