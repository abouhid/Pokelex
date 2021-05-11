import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../styles/grid.module.css";
import { getNum, getTypes } from "../../../services/getFunctions";

const Pokemon = ({ data }) => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());
  const types = getTypes(data);
  return (
    <Link
      className={styles.link}
      to={getNum(data.forms[0].url)}
      href={data.forms[0].url}
    >
      <img alt="img" src={data.sprites.front_default} />
      <div className={styles.names}>
        <span>
          Nº {getNum(data.forms[0].url)} <br /> {capitalize(data.name)}
        </span>
        {types}
      </div>
    </Link>
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
