/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import pokemon from "pokemon";
import { Context } from "../Context";
import FetchData from "../services/FetchData";
import EvolutionChain from "../components/EvolutionChain";
import MainInfo from "../components/MainInfo";
import getEvolution from "../services/getEvolution";
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
  const colors = {
    grass: "#7AC74C",
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  const evArr = [];
  let description;
  let name;
  let types;

  if (!noPokemon) {
    description = species.flavor_text_entries[2].flavor_text;
    types = data[0].types.map((el) => (
      <span
        key={el.type.name}
        style={{ backgroundColor: `${colors[el.type.name]}` }}
        className="types"
      >
        {el.type.name.toUpperCase()} {""}
      </span>
    ));
    name = capitalize(data[0].name);
  }

  useEffect(() => {
    const getData = async () => {
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
