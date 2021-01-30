/*eslint-disable */
import React, { useContext } from "react";
import pokemon, { all } from "pokemon";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";

import { Context } from "../Context";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";
import Filter from "../components/Filter";

const Header = () => {
  const { query, setQuery, setUrl, search, setSearch } = useContext(Context);
  const history = useHistory();
  const dispatch = useDispatch();

  const allPokemonArr = pokemon.all();
  const handleChange = (e) => {
    e.preventDefault();
    const filterArr = allPokemonArr.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );
    // dispatch({ type: value, payload: data });

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
        <Filter />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setUrl(search);
          }}
        >
          <input
            type="text"
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
      </Navbar>
    </div>
  );
};

export default Header;
