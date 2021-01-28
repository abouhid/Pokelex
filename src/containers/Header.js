import React, { useContext, useState } from "react";
/*eslint-disable */
import pokemon, { all } from "pokemon";

import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../Context";
import logo from "../images/snorlax.png";
import style from "../styles/image.module.css";

const Header = () => {
  const { query, setQuery, doFetch } = useContext(Context);
  const [search, setSearch] = useState(["ekans"]);
  const allPokemonArr = pokemon.all();

  const handleChange = (e) => {
    e.preventDefault();
    const filterArr = allPokemonArr.filter((el) =>
      el.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filterArr);
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
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </form>
      </Navbar>
    </div>
  );
};

export default Header;
