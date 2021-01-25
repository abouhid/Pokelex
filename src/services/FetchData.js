// export function createPokeImage(pokeID) {
//   let pokeImage = document.createElement("img");
//   pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
//   containerDiv.append(pokeImage);
// }

// function fetchPokemonData({ url }) {
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (pokeData) {
//       return pokeData;
//     });
// }

// function getList() {
//   return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//     .then((response) => response.json())
//     .then(function (allpokemon) {
//       allpokemon.results.forEach(function (pokemon) {
//         return fetchPokemonData(pokemon);
//       });
//     });
// }

// export default getList;
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
const FetchData = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
export default FetchData;
