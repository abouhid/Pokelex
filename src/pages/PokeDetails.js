import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import EvolutionChain from "../components/EvolutionChain";
import MainInfo from "../components/MainInfo";
import { getEvolution, getTypes } from "../services/getFunctions";
import pokeball from "../images/pokeball.svg";

const PokeDetails = () => {
  const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase());

  const { pokemonId } = useParams();
  const [species, setSpecies] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [data, setData] = useState([]);
  const loading = data ? data.length === 0 : false;
  const evArr = [];
  let description;
  let name;
  let types;
  if (!loading) {
    description = species.flavor_text_entries[17].flavor_text;
    types = getTypes(data);
    name = capitalize(data.name);
  }

  useEffect(() => {
    const getData = async () => {
      getEvolution(pokemonId, setSpecies, setEvolution, evArr, setData);
    };
    getData();
  }, [pokemonId]);

  return (
    <>
      {loading ? (
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
            name={name}
            data={data}
            description={description}
            types={types}
            pokemonId={pokemonId}
          />
          <EvolutionChain
            pokemonId={pokemonId}
            data={data}
            species={species}
            evolution={evolution}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  dataFetchReducer,
  genReducer,
});

export default connect(mapStateToProps, null)(PokeDetails);
