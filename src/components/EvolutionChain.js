/*eslint-disable */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

import pokemon from "pokemon";
import FetchData from "../services/FetchData";
import store from "../redux/store";
import changePage from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "../styles/pokePage.module.css";
import fetchChangePage from "../services/fetchChangePage";

const EvolutionChain = ({ evolution, getNum, pokemonId }) => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  console.log(store.getState().changeReducer, "store");
  const splitArr = evolution.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  const handleClick = (id) => {
    fetchChangePage(id);
  };

  const chainList = splitArr.map((el) => (
    <div onClick={() => handleClick(getNum(el[0]))} key={el}>
      <Link to={`/${getNum(el[0])}`}>
        <img alt="img" src={el[0]} />
        <br />
        <span>Nº {getNum(el[0])} </span>
        <h3>{capitalize(el[1])}</h3>
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
                <Link to="/1">
                  <Icon name="arrow alternate circle left" />
                  <img
                    alt="img"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png"
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

            <div className={styles.chainCenter}>{chainList}</div>

            <div className={styles.arrowCont}>
              {Number(pokemonId) === 809 ? (
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
  getNum: PropTypes.func.isRequired,
};

export default EvolutionChain;
// export default connect((state) => ({ state }), {
//   changePage,
// })(EvolutionChain);
