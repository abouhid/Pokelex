import React from "react";
import PropTypes from "prop-types";
import store from "../redux";
import Pokemon from "../components/Pokemon";
import styles from "../styles/grid.module.css";

const PokeGrid = ({ data }) => {
  const selectedGen = store.getState().genReducer;
  return (
    <div className={styles.pokegrid} data-testid="poke-grid">
      {selectedGen === "All" ? (
        <>
          {data.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} />
          ))}
        </>
      ) : (
        <>
          {selectedGen.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} />
          ))}
        </>
      )}
    </div>
  );
};

PokeGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.string }))
    .isRequired,
};
export default PokeGrid;
