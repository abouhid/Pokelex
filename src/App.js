import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import ItemDetails from "./pages/ItemDetails";
import MainPage from "./pages/MainPage";
/*eslint-disable */
import getList from "./services/FetchData";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/info/:productId">
          <ItemDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
