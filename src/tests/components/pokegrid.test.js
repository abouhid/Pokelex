import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PokeGrid from "../../containers/PokeGrid";

describe("PokeGrid Component", () => {
  test("Renders the correct content", () => {
    const data = [
      {
        forms: [
          { name: "arbork", url: "https://pokeapi.co/api/v2/pokemon-form/24/" },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        },
        name: "arbok",
        id: 24,
        height: "3m",
        weight: "30kg",
      },
    ];
    render(<PokeGrid data={data} />, { wrapper: MemoryRouter });

    expect(screen.getByText("Pokepedia")).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Pokepedia/)).toBeInTheDocument();
  });
});
