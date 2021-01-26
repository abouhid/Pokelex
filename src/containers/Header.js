import React, { useContext } from "react";
/*eslint-disable */

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Context } from "../Context";

const Header = () => {
  const { query, setQuery, data, isError, isLoading, doFetch } = useContext(
    Context
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">PokéList</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
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
