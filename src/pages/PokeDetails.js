import React from "react";
/*eslint-disable */
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";

const PokeDetails = () => {
  const { pokemonId } = useParams();
  const [{ data, isLoading, isError }, doFetch] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  return (
    <>
      <p>{data.name}</p>
    </>
  );
};

export default PokeDetails;
