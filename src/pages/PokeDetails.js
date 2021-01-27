/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";
import styles from "../styles/pokePage.module.css";
import { Context } from "../Context";
import axios from "axios";
import { number } from "prop-types";

// numero dex nacional

const PokeDetails = () => {
  const { pokemonId } = useParams();
  const { isError, isLoading, setIsError, setIsLoading } = useContext(Context);
  const [{ data }] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const [species, setSpecies] = useState([]);
  const noPokemon = Object.keys(data).length == 0 || species.length == 0;
  const [evolution, setEvolution] = useState([]);
  let sprite,
    sprite_shiny,
    description,
    types = [],
    firstEvolImg,
    secondEvolImg,
    thirdEvolImg,
    num;
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const chainEv = await axios(result.data.evolution_chain.url);
        setSpecies(result.data);

        console.log(chainEv.data.chain);

        if (chainEv.data.chain.species.name) {
          const firstEvol = await axios(
            `https://pokeapi.co/api/v2/pokemon/${chainEv.data.chain.species.name}`
          );
          firstEvolImg = firstEvol.data.sprites.front_default;
          num = 1;
          if (chainEv.data.chain.evolves_to[0]) {
            const secondEvol = await axios(
              `https://pokeapi.co/api/v2/pokemon/${chainEv.data.chain.evolves_to[0].species.name}`
            );
            secondEvolImg = secondEvol.data.sprites.front_default;
            num = 2;

            if (chainEv.data.chain.evolves_to[0].evolves_to[0]) {
              const thirdEvol = await axios(
                `https://pokeapi.co/api/v2/pokemon/${chainEv.data.chain.evolves_to[0].evolves_to[0].species.name}`
              );
              thirdEvolImg = thirdEvol.data.sprites.front_default;
              num = 3;
            }
          }
          switch (num) {
            case 1:
              setEvolution([firstEvolImg]);
            case 2:
              setEvolution([firstEvolImg, secondEvolImg]);
            case 3:
              setEvolution([firstEvolImg, secondEvolImg, thirdEvolImg]);
          }
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (!noPokemon) {
    sprite = data.sprites.front_default;
    sprite_shiny = data.sprites.front_shiny;
    description = species.flavor_text_entries[0].flavor_text;

    types = data.types.map((el) => (
      <p key={el.type.name}>{el.type.name.toUpperCase()}</p>
    ));
  }
  console.log(evolution);
  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
      {noPokemon ? (
        <div>No Pokemon Found!</div>
      ) : (
        <div>
          <img alt="img" src={sprite} />
          <img alt="img" src={sprite_shiny} />
          <p> {capitalize(data.name)}</p>
          <p>{description}</p>
          {types}
          <h1>Evolution Chain:</h1>
          <img alt="img" src={evolution[0]} />
          <img alt="img" src={evolution[1]} />
          <img alt="img" src={evolution[2]} />
        </div>
      )}
    </>
  );
};
export default React.memo(PokeDetails);
