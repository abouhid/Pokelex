import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Pokemon from "../components/Pokemon";
import styles from "../../../styles/grid.module.css";
import pokeball from "../../../images/pokeball.svg";

const PokeGrid = ({ data, filteredPokemon }) => {
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
          {filteredData.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon} />
          ))}
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
};

PokeGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.string })),
  filteredPokemon: PropTypes.string.isRequired,
};

const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  data: dataFetchReducer.data,
  filteredPokemon: genReducer,
});

export default connect(mapStateToProps, null)(PokeGrid);
