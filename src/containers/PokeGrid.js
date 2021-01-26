/*eslint-disable*/
import React from "react";
import Pokemon from "../components/Pokemon";
import styles from "../styles/grid.module.css";

const PokeGrid = ({ data, getNum }) => {
  return (
    <div className={styles.pokegrid}>
      {data.map((pokemon) => (
        <Pokemon key={pokemon.id} data={pokemon} getNum={getNum} />
      ))}
    </div>
  );
};

export default PokeGrid;
