import React, { useContext, useState } from "react";
import pokemon from "pokemon";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import store from "../redux";

import getGen from "../services/getGen";
import { Context } from "../Context";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";
import Filter from "../components/Filter";

const Header = () => {
  const { data, query, setQuery, setUrl } = useContext(Context);
  const dispatch = useDispatch();
  const [opt, setOpt] = useState([]);
  const history = useHistory();

  const allPokemonArr = pokemon.all();
  const handleChange = (e) => {
    e.preventDefault();
    const filterArrName = allPokemonArr.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const filterArrNum = filterArrName.map((el) => pokemon.getId(el));
    setOpt(filterArrNum);
    setQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: document.getElementsByTagName("select")[0].value,
      payload: data,
    });
    setUrl(store.getState().genReducer);
    dispatch({ type: "All", payload: data });

    if (event.target[0].defaultValue !== "") {
      setUrl(opt);
      document.getElementsByTagName("select")[0].value = "All";
    } else {
      const { value } = document.getElementsByTagName("select")[0];
      setUrl(getGen(value));
    }
  };

  return (
    <div>
      <nav bg="dark" variant="dark">
        <a className={style.title} href="/">
          <img className={style.logo} src={logo} alt="Logo" />
          PokéLex
        </a>
        <div className="mr-auto" />
        <Filter />
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Search Pokémon"
            value={query}
            style={{ marginRight: "10px" }}
            onChange={(event) => handleChange(event)}
          />

          <Button
            type="submit"
            variant="outline-info"
            onClick={() => history.push("/")}
          >
            Search
          </Button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
