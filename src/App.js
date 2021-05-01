import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import store from "./redux";
import MainPage from "./pages/MainPage/MainPage";
import PokeDetails from "./pages/PokeDetails/PokeDetails";

function App() {
  const { data, isLoading } = store.getState().dataFetchReducer;
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage data={data} isLoading={isLoading} />
        </Route>
        <Route path="/:pokemonId">
          <PokeDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  dataFetchReducer,
  genReducer,
});

export default connect(mapStateToProps, null)(App);
