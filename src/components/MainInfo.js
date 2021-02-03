import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/pokePage.module.css";

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
      .map((el) => (
        <img key={el} style={{ width: "13vw" }} alt="img" src={el} />
      ));
  };
  return (
    <div className={styles.cont}>
      <div className={styles.infoCont}>
        <img
          className={styles.mainImg}
          data-testid="mainImg"
          alt="img"
          src={data.sprites.other["official-artwork"].front_default}
        />
        <div style={{ width: "60vw" }}>
          {loadImgs()}
          <h2 className="nameTest">
            {name} - <span>Nº {pokemonId} </span>
          </h2>
          <div style={{ fontSize: "2.5vw" }}>Type(s): {types}</div>
          <div style={{ margin: "10px", fontSize: "2vw" }}>
            Height: {height} m - Weight: {weight} kg
          </div>
          <p style={{ padding: "3% 0%", fontSize: "2vw" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};
MainInfo.propTypes = {
  pokemonId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
      front_shiny: PropTypes.string,
      back_default: PropTypes.string,
      back_shiny: PropTypes.string,
      other: PropTypes.shape({
        "official-artwork": PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
    weight: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
export default MainInfo;
