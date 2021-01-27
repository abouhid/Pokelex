import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

import styles from "../styles/pokePage.module.css";

const EvolutionChain = ({ evolution, getNum, pokemonId }) => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  const splitArr = evolution.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  const chainList = splitArr.map((el) => (
    <div key={el}>
      <a href={`/${getNum(el[0])}`}>
        <img alt="img" src={el[0]} />
        <br />
        <span>Nº {getNum(el[0])} </span>
        <h3>{capitalize(el[1])}</h3>
      </a>
    </div>
  ));

  return (
    <div>
      <div>
        <div className={styles.chain}>
          <h1>Evolution Chain:</h1>
          <div>
            {Number(pokemonId) === 1 ? (
              <div />
            ) : (
              <div className={styles.arrowCont}>
                <a href={`/${Number(pokemonId) - 1}`}>
                  <Icon name="arrow alternate circle left" />
                  <img
                    alt="img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      Number(pokemonId) - 1
                    }.png`}
                  />
                </a>
              </div>
            )}
            <div className={styles.chainCenter}>{chainList}</div>
            <div className={styles.arrowCont}>
              <a href={`/${Number(pokemonId) + 1}`}>
                <Icon name="arrow alternate circle right" />
                <img
                  alt="img"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    Number(pokemonId) + 1
                  }.png`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
EvolutionChain.propTypes = {
  evolution: PropTypes.arrayOf(PropTypes.string).isRequired,
  pokemonId: PropTypes.string.isRequired,
  getNum: PropTypes.func.isRequired,
};

export default EvolutionChain;
