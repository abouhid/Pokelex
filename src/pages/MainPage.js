import { useContext } from "react";
/*eslint-disable */
import Filter from "../components/Filter";
import Pokemon from "../components/Pokemon";
import PokeGrid from "../containers/PokeGrid";
import { Context } from "../Context";
const MainPage = () => {
  const { data, isError, isLoading, getNum } = useContext(Context);
  const noPokemon = Object.keys(data).length == 0;
  const isOnePokemon = Object.keys(data).length == 17;

  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
      {noPokemon ? (
        <div>No Pokemon Found!</div>
      ) : isOnePokemon ? (
        <Pokemon data={data} getNum={getNum} />
      ) : (
        <PokeGrid data={data} getNum={getNum} />
      )}
    </>
  );
};

export default MainPage;
