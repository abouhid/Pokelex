import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

import styles from "../styles/pokePage.module.css";

const EvolutionChain = ({ data, species, evolution, getNum, pokemonId }) => {
  const sprite = data.sprites.front_default;
  const spriteShiny = data.sprites.front_shiny;
  const description = species.flavor_text_entries[2].flavor_text;
  const types = data.types.map((el) => (
    <p key={el.type.name}>{el.type.name.toUpperCase()}</p>
  ));
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  const splitArr = evolution.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  const chainList = splitArr.map((el) => (
    <div key={el}>
      <a href={`/${getNum(el[0])}`}>
        <img alt="img" src={el[0]} />
        <span>Nº {getNum(el[0])} </span>
        <h3>{capitalize(el[1])}</h3>
      </a>
    </div>
  ));

  return (
    <div>
      <div>
        <img alt="img" src={sprite} />
        <img alt="img" src={spriteShiny} />
        <p> {capitalize(data.name)}</p>
        <p>{description}</p>
        {types}

        <div className={styles.chain}>
          <h1>Evolution Chain:</h1>
          <div>
            {pokemonId === 1 ? (
              <></>
            ) : (
              <a href={`/${pokemonId - 1}`}>
                <Icon name="arrow alternate circle left" />
              </a>
            )}
            <div>{chainList}</div>
            <a href={`/${Number(pokemonId) + 1}`}>
              <Icon name="arrow alternate circle right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
EvolutionChain.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.arrayOf(
      PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
    ),
    types: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  species: PropTypes.shape({
    flavor_text_entries: PropTypes.arrayOf(
      PropTypes.shape({ flavor_text: PropTypes.string.isRequired }).isRequired
    ),
  }).isRequired,
  evolution: PropTypes.shape({
    flavor_text_entries: PropTypes.arrayOf(
      PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
    ),
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  pokemonId: PropTypes.number.isRequired,
  //   data: PropTypes.shape({
  //     forms: PropTypes.arrayOf(
  //       PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
  //     ).isRequired,
  //     sprites: PropTypes.shape({ front_default: PropTypes.string.isRequired })
  //       .isRequired,
  //     name: PropTypes.string.isRequired,
  //   }).isRequired,
  getNum: PropTypes.func.isRequired,
};

export default EvolutionChain;
