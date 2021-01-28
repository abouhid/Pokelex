import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import pokemon from "pokemon";

// import { Icon } from "semantic-ui-react";
import { Context } from "../Context";
import FetchData from "../services/FetchData";
import EvolutionChain from "../components/EvolutionChain";
import MainInfo from "../components/MainInfo";
import getEvolution from "../services/getEvolution";
import styles from "../styles/types.module.css";
import pokeball from "../images/pokeball.svg";

const PokeDetails = () => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  const { pokemonId } = useParams();
  const {
    isError,
    isLoading,
    setIsError,
    setIsLoading,
    getNum,
    getImg,
    getName,
  } = useContext(Context);
  const [{ data }] = FetchData([pokemon.getName(pokemonId)]);
  const [species, setSpecies] = useState([]);

  const noPokemon = Object.keys(data).length === 0 || species.length === 0;
  const [evolution, setEvolution] = useState([]);
  const evArr = [];
  let description;
  let name;
  let types;
  if (!noPokemon) {
    description = species.flavor_text_entries[2].flavor_text;
    types = data[0].types.map((el) => (
      <span key={el.type.name} className={styles.typeCont}>
        {el.type.name.toUpperCase()} {""}
      </span>
    ));
    name = capitalize(data[0].name);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        getEvolution(
          pokemonId,
          setSpecies,
          getImg,
          getNum,
          setEvolution,
          evArr
        );
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading && (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      )}
      {noPokemon ? (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      ) : (
        <>
          <MainInfo
            data={data}
            name={name}
            description={description}
            types={types}
          />

          <EvolutionChain
            pokemonId={pokemonId}
            data={data}
            species={species}
            evolution={evolution}
            getNum={getNum}
            getName={getName}
          />
        </>
      )}
    </>
  );
};
export default React.memo(PokeDetails);
