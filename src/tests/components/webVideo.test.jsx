import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContextProvider } from "../../Context";

import App from "../../App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux";
import { getQueriesForElement } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";

import {
  getTypes,
  getNum,
  getEvolution,
  getGen,
  getName,
  getImg,
} from "../../services/getFunctions";

const render2 = (component) => {
  const root = document.createElement("div");

  ReactDOM.render(
    <Provider store={store}>
      <ContextProvider>
        <Router>{component}</Router>
      </ContextProvider>
    </Provider>,
    root
  );
  return getQueriesForElement(root);
};

test("renders the correct content", async () => {
  const mock = jest.fn();
  const result = await getEvolution(1, mock, mock, [], mock);

  expect(result).toStrictEqual([
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "bulbasaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "ivysaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "venusaur",
  ]);
});
test("Tests getEvolution", async () => {
  const mock = jest.fn();
  const result = await getEvolution(1, mock, mock, [], mock);

  expect(result).toStrictEqual([
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "bulbasaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "ivysaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "venusaur",
  ]);
});

test("Tests getGen", () => {
  const result = getGen(1);

  expect(result).toStrictEqual([...Array(31).keys()].slice(1));
});

test("Tests getting queries", () => {
  const { getByText } = render2(<App />);
  const result = getGen(1);

  expect(getByText("PokéLex")).not.toBeNull();
});
