import { useContext } from "react";
import { Alert } from "react-bootstrap";
import PokeGrid from "../containers/PokeGrid";
import { Context } from "../Context";
import pokeball from "../images/pokeball.svg";

const MainPage = () => {
  const { setAlert, alert, data, isError, isLoading, getNum } = useContext(
    Context
  );
  const noPokemon = Object.keys(data).length === 0;

  return (
    <>
      {alert ? (
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
          <p>Invalid Search!</p>
        </Alert>
      ) : (
        <></>
      )}

      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      ) : (
        <></>
      )}
      {noPokemon ? (
        "No Pokémon Found!"
      ) : (
        <PokeGrid data={data} getNum={getNum} />
      )}
    </>
  );
};

export default MainPage;
