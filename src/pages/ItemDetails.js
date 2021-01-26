import React from "react";
/*eslint-disable */
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { pokemonId } = useParams();
  const [{ data, isLoading, isError }, doFetch] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    {
      forms: [],
    }
  );
  console.log(data);
  return <div>Item Details</div>;
};

export default ItemDetails;
