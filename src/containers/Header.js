import React, { useContext } from "react";
import pokemon from "pokemon";
import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";

import { Context } from "../Context";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";
import Filter from "../components/Filter";

const Header = () => {
  const { setAlert, query, setQuery, setUrl, search, setSearch } = useContext(
    Context
  );
  const history = useHistory();

  const allPokemonArr = pokemon.all();
  const handleChange = (e) => {
    e.preventDefault();
    const filterArr = allPokemonArr.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearch(filterArr);

    setQuery(e.target.value);
  };

  return (
    <div>
      <nav bg="dark" variant="dark">
        <a href="/">
          <img className={style.logo} src={logo} alt="Logo" />
          PokéLex
        </a>
        <div className="mr-auto" />
        <Filter />
        <form
          onSubmit={(event) => {
            event.preventDefault();

            if (event.target[0].defaultValue !== "") {
              setUrl(search);
            } else {
              setAlert(true);
            }
          }}
        >
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
