/*eslint-disable*/
import React from "react";
import store from "../redux";
import Pokemon from "../components/Pokemon";
import styles from "../styles/grid.module.css";

const PokeGrid = ({ data, getNum }) => {
  const selectedGen = store.getState().genReducer;

  const filterArr = data.filter(
    (el) => el.id > selectedGen[0] && el.id < selectedGen[1]
  );
  console.log(filterArr);
  return (
    <div className={styles.pokegrid}>
      {data.map((pokemon) =>
        pokemon.id > selectedGen[0] && pokemon.id < selectedGen[1] ? (
          <Pokemon key={pokemon.id} data={pokemon} getNum={getNum} />
        ) : (
          <React.Fragment key={pokemon.id}></React.Fragment>
        )
      )}
    </div>
  );
};

export default PokeGrid;
