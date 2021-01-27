/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";
import styles from "../styles/pokePage.module.css";
import { Context } from "../Context";
import axios from "axios";

// numero dex nacional

const PokeDetails = () => {
  const { pokemonId } = useParams();
  const { isError, isLoading, setIsError, setIsLoading } = useContext(Context);

  const [{ data }] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const noPokemon = Object.keys(data).length == 0;

  const [species, setSpecies] = useState([]);
  const [evolution, setEvolution] = useState([]);

  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  const getEvolution = (evchain) => {
    return fetch(evchain).then((data) => data.json());
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        console.log(result.data.evolution_chain.url);
        const result2 = await axios(result.data.evolution_chain.url);
        console.log(result2.data.chain.species.name);

        if (typeof result2.data.chain.evolves_to[0] !== "undefined") {
          console.log(result2.data.chain.evolves_to[0].species.name);
          if (
            typeof result2.data.chain.evolves_to[0].evolves_to[0] !==
            "undefined"
          ) {
            console.log(
              result2.data.chain.evolves_to[0].evolves_to[0].species.name
            );
          }
        }

        setSpecies(result.data);
        setEvolution(result2);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
      {noPokemon ? (
        <div>No Pokemon Found!</div>
      ) : (
        <div>
          <img alt="img" src={data.sprites.front_default} />
          <img alt="img" src={data.sprites.front_shiny} />
          <p> {capitalize(data.name)}</p>
          {/* {console.log(evolution)} */}
          {/* <p>{species.flavor_text_entries[13].flavor_text}</p> */}
        </div>
      )}
    </>
  );
};
export default PokeDetails;
