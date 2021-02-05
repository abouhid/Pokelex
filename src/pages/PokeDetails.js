import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import EvolutionChain from "../components/EvolutionChain";
import MainInfo from "../components/MainInfo";
import { getEvolution, getTypes } from "../services/getFunctions";
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
  const [data, setData] = useState({});

  const [species, setSpecies] = useState([]);
  const noPokemon = Object.keys(data).length === 0 || species.length === 0;
  const [evolution, setEvolution] = useState([]);

  const evArr = [];
  let description;
  let name;
  let types;

  if (!noPokemon) {
    description = species.flavor_text_entries[17].flavor_text;
    types = getTypes(data);
    name = capitalize(data.name);
  }

  useEffect(() => {
    const getData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        getEvolution(
          setData,
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
    getData();
  }, [pokemonId]);

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
            pokemonId={pokemonId}
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
export default PokeDetails;
