/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import FetchData, { fetchPokemonData } from "../services/FetchData";
import { useParams } from "react-router-dom";
import styles from "../styles/pokePage.module.css";
import { Context } from "../Context";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// numero dex nacional

const PokeDetails = () => {
  const { pokemonId } = useParams();
  const {
    isError,
    isLoading,
    setIsError,
    setIsLoading,
    getNum,
    getImg,
  } = useContext(Context);
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
    evArr = [],
    chainList;
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

        if (chainEv.data.chain.evolves_to.length > 1) {
          chainEv.data.chain.evolves_to.map((el) => {
            evArr.push(getImg(getNum(el.species.url)));
            evArr.push(el.species.name);
          });

          setEvolution(evArr);
        } else if (chainEv.data.chain.species.name) {
          evArr.push(getImg(getNum(chainEv.data.chain.species.url)));
          evArr.push(chainEv.data.chain.species.name);
          if (chainEv.data.chain.evolves_to[0]) {
            evArr.push(
              getImg(getNum(chainEv.data.chain.evolves_to[0].species.url))
            );
            evArr.push(chainEv.data.chain.evolves_to[0].species.name);

            if (chainEv.data.chain.evolves_to[0].evolves_to[0]) {
              evArr.push(
                getImg(
                  getNum(
                    chainEv.data.chain.evolves_to[0].evolves_to[0].species.url
                  )
                )
              );
              evArr.push(
                chainEv.data.chain.evolves_to[0].evolves_to[0].species.name
              );
            }
          }

          setEvolution(evArr);
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
    description = species.flavor_text_entries[2].flavor_text;
    types = data.types.map((el) => (
      <p key={el.type.name}>{el.type.name.toUpperCase()}</p>
    ));

    let splitArr = evolution.reduce(function (result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);

    chainList = splitArr.map((el) => (
      <div key={el}>
        <a href={`/${getNum(el[0])}`}>
          <img alt="img" src={el[0]} />
          Nº {getNum(el[0])} <h3>{capitalize(el[1])}</h3>
        </a>
      </div>
    ));
  }
  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading && (
        <div>
          <Icon loading name="spinner" />
        </div>
      )}
      {noPokemon ? (
        <div>No Pokemon Found!</div>
      ) : (
        <div>
          <img alt="img" src={sprite} />
          <img alt="img" src={sprite_shiny} />
          <p> {capitalize(data.name)}</p>
          <p>{description}</p>
          {types}
          {pokemonId == 1 ? (
            <></>
          ) : (
            <a href={`/${pokemonId - 1}`}>
              <Icon name="arrow alternate circle left" />
            </a>
          )}
          <a href={`/${Number(pokemonId) + 1}`}>
            <Icon name="arrow alternate circle right" />
          </a>
          <div className={styles.chain}>
            <h1>Evolution Chain:</h1>
            <div>{chainList}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(PokeDetails);
