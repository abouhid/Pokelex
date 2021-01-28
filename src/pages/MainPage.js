import { useContext } from "react";
/*eslint-disable */
import Filter from "../components/Filter";
import PokeGrid from "../containers/PokeGrid";
import { Context } from "../Context";
import pokeball from "../images/pokeball.svg";

const MainPage = () => {
  const { data, isError, isLoading, getNum } = useContext(Context);
  const noPokemon = Object.keys(data).length == 0;
  const isOnePokemon = Object.keys(data).length == 17;

  return (
    <>
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
