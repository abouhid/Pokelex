/*eslint-disable */
import { useContext, useEffect, useState, useReducer } from "react";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";
import store from "../redux";
import PokeGrid from "../containers/PokeGrid";
import pokeball from "../images/pokeball.svg";

const MainPage = () => {
  const { data, isLoading } = store.getState().dataFetchReducer;
  const loading = typeof data === "undefined" || isLoading;
  const empty = data ? (data.length === 0 ? true : false) : false;
  return (
    <>
      {empty ? <Alert variant="danger">No Pokémon Found!</Alert> : <></>}
      {loading ? (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      ) : (
        <PokeGrid data={data} />
      )}
    </>
  );
};
const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  dataFetchReducer,
  genReducer,
});

export default connect(mapStateToProps, null)(MainPage);
