/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
// import { createPokeImage } from "../services/FetchImage";
const Filter = () => {
  const { data } = useContext(Context);

  const getNum = (url) => {
    const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
    return el;
  };
  const noPokemon = Object.keys(data).length == 0;
  const isOnePokemon = Object.keys(data).length == 17;

  const limit = noPokemon ? (
    <p>No Pokémon Found!</p>
  ) : isOnePokemon ? (
    <p key={data.id}>
      <Link to={getNum(data.forms[0].url)} href={data.forms[0].url}>
        <img src={data.sprites.front_default} />

        {data.name}
      </Link>
    </p>
  ) : (
    <>
      {data.map((pokemon) => (
        <p key={pokemon.id}>
          {console.log(pokemon)}
          <Link to={getNum(pokemon.forms[0].url)} href={pokemon.forms[0].url}>
            <img src={pokemon.sprites.front_default} />
            {pokemon.name}
          </Link>
        </p>
      ))}
    </>
  );

  return <div>{limit}</div>;
};

export default Filter;
