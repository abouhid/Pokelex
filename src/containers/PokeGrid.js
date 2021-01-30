/*eslint-disable*/
import React from "react";
import store from "../redux";
import Pokemon from "../components/Pokemon";
import styles from "../styles/grid.module.css";

const PokeGrid = ({ data, getNum }) => {
  const selectedGen = store.getState().genReducer;

  return (
    <div className={styles.pokegrid}>
      {selectedGen === "All" ? (
        <>
          {data.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} getNum={getNum} />
          ))}
        </>
      ) : (
        <>
          {selectedGen.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} getNum={getNum} />
          ))}
        </>
      )}
    </div>
  );
};

export default PokeGrid;
