/*eslint-disable */
import React, { useEffect } from "react";
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";
import styles from "../styles/pokePage.module.css";

const PokeDetails = () => {
  const { pokemonId } = useParams();
  const [{ data, isLoading, isError }, doFetch] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const noPokemon = Object.keys(data).length == 0;

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {noPokemon ? (
        <div>No Pokemon Found!</div>
      ) : (
        <div>
          <img alt="img" src={data.sprites.front_default} />
          <img alt="img" src={data.sprites.front_shiny} />
        </div>
      )}
      <p>{data.name}</p>
    </>
  );
};
export default PokeDetails;
