import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/grid.module.css";
import { Context } from "../Context";

const Pokemon = ({ data }) => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());
  const { getNum } = useContext(Context);

  return (
    <div className={styles.pokemon}>
      <Link to={getNum(data.forms[0].url)} href={data.forms[0].url}>
        <img alt="img" src={data.sprites.front_default} />

        {capitalize(data.name)}
      </Link>
    </div>
  );
};

Pokemon.propTypes = {
  data: PropTypes.shape({
    forms: PropTypes.arrayOf(
      PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
    ).isRequired,
    sprites: PropTypes.shape({ front_default: PropTypes.string.isRequired })
      .isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
