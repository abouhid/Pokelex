import { useState } from "react";
/*eslint-disable */
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = FetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=15"
  );
  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          doFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ol>
          {console.log(Object.keys(data).length)}

          {Object.keys(data).length == 0 ? (
            <li>No Pokemon Found!</li>
          ) : Object.keys(data).length == 15 ? (
            data.map((pokemon) => (
              <li key={pokemon.id}>
                <Link
                  to={getNum(pokemon.forms[0].url)}
                  href={pokemon.forms[0].url}
                >
                  {pokemon.name}
                </Link>
              </li>
            ))
          ) : (
            <li key={data.id}>
              <Link to={getNum(data.forms[0].url)} href={data.forms[0].url}>
                {data.name}
              </Link>
            </li>
          )}
        </ol>
      )}
    </>
  );
};

export default MainPage;
