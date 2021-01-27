/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import FetchData from "../services/FetchData";
import { useParams } from "react-router-dom";
import styles from "../styles/pokePage.module.css";
import { Context } from "../Context";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import EvolutionChain from "../components/EvolutionChain";

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
  } = useContext(Context);
  const [{ data }] = FetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  // const sprite = data.sprites.front_default;
  // const spriteShiny = data.sprites.front_shiny;
  // const description = species.flavor_text_entries[2].flavor_text;
  const [species, setSpecies] = useState([]);

  const noPokemon = Object.keys(data).length == 0 || species.length == 0;
  if (!noPokemon) {
    const types = data.types.map((el) => (
      <p key={el.type.name}>{el.type.name.toUpperCase()}</p>
    ));
  }
  const [evolution, setEvolution] = useState([]);
  let evArr = [];

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
        <>
          <img alt="img" src={data.sprites.front_default} />
          <img alt="img" src={data.sprites.front_shiny} />
          <p> {capitalize(data.name)}</p>
          <p>{species.flavor_text_entries[2].flavor_text}</p>
          {/* {types} */}
          <EvolutionChain
            pokemonId={pokemonId}
            data={data}
            species={species}
            evolution={evolution}
            getNum={getNum}
          />
        </>
      )}
    </>
  );
};
export default React.memo(PokeDetails);
