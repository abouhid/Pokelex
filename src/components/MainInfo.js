import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/pokePage.module.css";

const MainInfo = ({ name, description, types, data }) => {
  const sprites = [];
  const weight = data.weight / 10;
  const height = data.height / 10;

  sprites[0] = data.sprites.front_default;
  sprites[1] = data.sprites.front_shiny;
  sprites[2] = data.sprites.back_default;
  sprites[3] = data.sprites.back_shiny;
  return (
    <div className={styles.cont}>
      <div className={styles.infoCont}>
        <img className={styles.mainImg} alt="img" src={sprites[0]} />
        <div style={{ width: "150%" }}>
          <img alt="img" src={sprites[0]} />
          <img alt="img" src={sprites[2]} />
          <img alt="img" src={sprites[1]} />
          <img alt="img" src={sprites[3]} />

          <h2> {name}</h2>
          <div>Type(s): {types}</div>
          <div>
            Height: {height} m - Weight: {weight} kg
          </div>
          <p style={{ padding: "3% 0%" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};
MainInfo.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    sprites: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
export default MainInfo;
