import React, { useContext } from "react";
/*eslint-disable */
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../Context";

const Header = () => {
  const { query, setQuery, doFetch } = useContext(Context);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">PokéLex</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            doFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button variant="outline-info">Search</Button>
        </form>
      </Navbar>
    </div>
  );
};

export default Header;
