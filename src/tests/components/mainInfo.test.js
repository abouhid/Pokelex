import { render, screen, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import FetchData from "../../services/FetchData";
import App from "../../App";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "../../Context";
import store from "../../redux";
import PokeDetails from "../../pages/PokeDetails";
import Header from "../../containers/Header";
import MainInfo from "../../components/MainInfo";

// beforeEach(() => {
//   render(
//     <Provider store={store}>
//       <ContextProvider>
//         <Router>
//           <App>
//             <PokeDetails />
//           </App>
//         </Router>
//       </ContextProvider>
//     </Provider>
//   );
// });

describe("MainPage testing", () => {
  test("Submitting ", () => {
    const name = "Venusaur";
    const description =
      "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.";
    const types = [{ key: "grass" }, { key: "poison" }];
    const pokemonId = "3";
    const data = {
      forms: [
        { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon-form/3/" },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      },
      name: "Venusaur",
      id: 3,
      height: 3,
      weight: 30,
    };
    const { container } = render(
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <App>
              <MainInfo
                data={data}
                name={name}
                description={description}
                types={types}
                pokemonId={pokemonId}
              />
            </App>
          </Router>
        </ContextProvider>
      </Provider>
    );

    // const inputName = screen.getByText("Venusaur");
    // fireEvent.change(screen.getByTestId("sortSelect"), {
    //   target: { value: "Gen I" },
    // });

    expect("").toBe("");
  });
});
