import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getNum } from "../../../services/getFunctions";
import styles from "../../../styles/pokePage.module.css";

const EvolutionChain = ({ evolution, pokemonId }) => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());
  const splitArr = evolution.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  const styling = splitArr.length > 3 ? styles.eevee : styles.chainCenter;

  const chainList = splitArr.map((el) => (
    <div key={el}>
      <Link to={`/${getNum(el[0])}`}>
        {getNum(el[0]) === pokemonId ? (
          <div className={styles.selected}>
            <img alt="img" src={el[0]} />
            <br />
            <span>Nº {getNum(el[0])} </span>
            <h5>{capitalize(el[1])}</h5>
          </div>
        ) : (
          <div>
            <img alt="img" src={el[0]} />
            <br />
            <span>Nº {getNum(el[0])} </span>
            <h3>{capitalize(el[1])}</h3>
          </div>
        )}
      </Link>
    </div>
  ));

  return (
    <div>
      <div>
        <div className={styles.chain}>
          <h1 className={styles.title}>Evolution Chain:</h1>
          <div>
            {Number(pokemonId) === 1 ? (
              <div className={styles.arrowCont}>
                <Link to="/898">
                  <Icon name="arrow alternate circle left" />
                  <img
                    alt="img"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png"
                  />
                </Link>
              </div>
            ) : (
              <div className={styles.arrowCont}>
                <Link to={`/${Number(pokemonId) - 1}`}>
                  <Icon name="arrow alternate circle left" />
                  <img
                    alt="img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      Number(pokemonId) - 1
                    }.png`}
                  />
                </Link>
              </div>
            )}

            <div className={styling}>{chainList}</div>

            <div className={styles.arrowCont}>
              {Number(pokemonId) === 898 ? (
                <div className={styles.arrowCont}>
                  <Link to="/1">
                    <Icon name="arrow alternate circle right" />
                    <img
                      alt="img"
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    />
                  </Link>
                </div>
              ) : (
                <div className={styles.arrowCont}>
                  <Link to={`/${Number(pokemonId) + 1}`}>
                    <Icon name="arrow alternate circle right" />
                    <img
                      alt="img"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        Number(pokemonId) + 1
                      }.png`}
                    />
                  </Link>
                </div>
              )}
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
};

export default EvolutionChain;
