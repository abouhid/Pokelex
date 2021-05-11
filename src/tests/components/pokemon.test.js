import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import store from "../../redux";
import Pokemon from "../../pages/MainPage/components/Pokemon";

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
      funct: jest.fn(async () => {
        return axios(`https://pokeapi.co/api/v2/pokemon/151`)
          .then((result) => result.data.name)
          .catch(() => "Error");
      }),
    };

    expect(data.funct()).resolves.toBe("mew");

    const spy = jest.spyOn(data, "funct");
    spy();
    expect(spy).toHaveBeenCalled();

    const mockFn = jest.fn().mockImplementation((test) => `hey there${test}`);
    mockFn("test");
    expect(mockFn).toHaveBeenCalledWith("test");

    expect(screen.getByText("Nº 151 Mew")).toBeInTheDocument();
  });
  test("Should render image of 'Mew' on src", () => {
    const image = screen.getByRole("img").getAttribute("src");
    expect(image).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    );
  });
});
