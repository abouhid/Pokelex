import React, { Fragment } from "react";
import { string, shape, arrayOf, oneOfType, number } from "prop-types";
import Pokemon from "../components/Pokemon";
import styles from "../../../styles/grid.module.css";
import pokeball from "../../../images/pokeball.svg";

const PokeGrid = ({ data, filteredPokemon, page, pageLimit }) => {
  const filteredData =
    filteredPokemon === "All"
      ? data
      : data.filter((el) =>
          filteredPokemon.map((pokemon) => pokemon.id).includes(el.id)
        );
  return (
    <div className={styles.pokegrid} data-testid="poke-grid">
      {data ? (
        <>
          {filteredData.map((pokemon, i) =>
            Math.floor(i / pageLimit) === page - 1 ? (
              <Pokemon key={pokemon.id} data={pokemon} />
            ) : (
              <Fragment key={pokemon.id} />
            )
          )}
        </>
      ) : (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      )}
    </div>
  );
};

PokeGrid.defaultProps = {
  data: [],
  page: 1,
  pageLimit: 16,
};

PokeGrid.propTypes = {
  data: arrayOf(shape({ data: string })),
  filteredPokemon: oneOfType([string, shape({}), arrayOf(shape({}))])
    .isRequired,
  page: number,
  pageLimit: number,
};

export default PokeGrid;
