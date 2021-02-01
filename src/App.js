import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import PokeDetails from "./pages/PokeDetails";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:pokemonId">
            <PokeDetails />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
