import React, { useContext } from "react";
import FetchData from "../services/FetchData";
/*eslint-disable*/
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Filter = () => {
  const { query, setQuery } = useContext(Context);
  const [{ data }, doFetch] = FetchData();
  //   doFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };
  const limit =
    Object.keys(data).length == 0 ? (
      <li>No Pokémon Found!</li>
    ) : Object.keys(data).length == 10 ? (
      <>
        {data
          .filter((poke) => poke.name.includes(query))
          .map((pokemon) => (
            <li key={pokemon.id}>
              <Link
                to={getNum(pokemon.forms[0].url)}
                href={pokemon.forms[0].url}
              >
                {pokemon.name}
              </Link>
            </li>
          ))}
      </>
    ) : (
      <li key={data.id}>
        <Link to={getNum(data.forms[0].url)} href={data.forms[0].url}>
          {data.name}
        </Link>
      </li>
    );

  return <div>{limit}</div>;
};

export default Filter;
