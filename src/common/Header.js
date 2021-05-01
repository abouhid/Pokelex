import React, { useState } from "react";
import pokemon from "pokemon";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { getGen } from "../services/getFunctions";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";
import Filter from "./Filter";
import store from "../redux";
import getData from "../redux/actions";
import FetchData from "../services/FetchData";

const Header = () => {
  const [setUrl] = FetchData();
  const [query, setQuery] = useState("");
  const { data } = store.getState().dataFetchReducer;

  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);
  const history = useHistory();

  const allPokemonArr = pokemon.all();

  const handleChange = (e) => {
    e.preventDefault();

    const filterArrName = allPokemonArr.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const filterArrNum = filterArrName.map((el) => pokemon.getId(el));
    setSearch(filterArrNum);
    setQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getData("All", data));
    if (event.target[0].defaultValue !== "") {
      setUrl(search);
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
            aria-label="cost-input"
            data-testid="form"
          />

          <Button
            aria-label="cost-button"
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
