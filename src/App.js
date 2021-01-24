import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import ItemDetails from "./pages/ItemDetails";
import MainPage from "./pages/MainPage";
/*eslint-disable */
import getList from "./services/list";
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
        console.log(items);
      }
    });
    return () => (mounted = false);
  }, []);
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
