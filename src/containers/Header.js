/*eslint-disable */
import React, { useContext } from "react";
import pokemon, { all } from "pokemon";
import { useHistory } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../Context";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";

const Header = () => {
  const { query, setQuery, doFetch, search, setSearch } = useContext(Context);
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img className={style.logo} src={logo} alt="Logo" />
          PokéLex
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            doFetch(search);
          }}
        >
          <input
            type="text"
            value={query}
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
      </Navbar>
    </div>
  );
};

export default Header;
