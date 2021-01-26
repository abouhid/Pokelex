/*eslint-disable*/
import React from "react";
import Pokemon from "../components/Pokemon";
const PokeGrid = ({ data, getNum }) => {
  return (
    <div>
      {data.map((pokemon) => (
        <Pokemon key={pokemon.id} data={pokemon} getNum={getNum} />
      ))}
    </div>
  );
};

export default PokeGrid;
