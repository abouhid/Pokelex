/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import PokeGrid from "../containers/PokeGrid";

const Filter = () => {
  const { data, getNum } = useContext(Context);

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
    <PokeGrid data={data} getNum={getNum} />
  );

  return <div>{limit}</div>;
};

export default Filter;
