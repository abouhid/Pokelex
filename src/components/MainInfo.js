import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/pokePage.module.css";
/*eslint-disable */

const MainInfo = ({ name, description, types, data, pokemonId }) => {
  const sprites = [];
  const weight = data.weight / 10;
  const height = data.height / 10;
  sprites[0] = data.sprites.front_default;
  sprites[1] = data.sprites.front_shiny;
  sprites[2] = data.sprites.back_default;
  sprites[3] = data.sprites.back_shiny;
  const loadImgs = () => {
    return sprites
      .filter((el) => el)
      .map((el) => <img key={el} alt="img" src={el} />);
  };
  return (
    <div className={styles.cont}>
      <div className={styles.infoCont}>
        <img
          className={styles.mainImg}
          alt="img"
          src={data.sprites.other["official-artwork"].front_default}
        />
        <div style={{ width: "150%" }}>
          {loadImgs()}
          <h2>
            {" "}
            <span>Nº {pokemonId} </span> {name}
          </h2>
          <div>Type(s): {types}</div>
          <div style={{ margin: "10px" }}>
            Height: {height} m - Weight: {weight} kg
          </div>
          <p style={{ padding: "3% 0%" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};
MainInfo.propTypes = {
  pokemonId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
      front_shiny: PropTypes.string,
      back_default: PropTypes.string,
      back_shiny: PropTypes.string,
    }),
    weight: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
export default MainInfo;
