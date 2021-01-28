import axios from "axios";

const getEvolution = async (
  pokemonId,
  setSpecies,
  getImg,
  getNum,
  setEvolution,
  evArr
) => {
  const result = await axios(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
  const chainEv = await axios(result.data.evolution_chain.url);
  setSpecies(result.data);

  if (chainEv.data.chain.evolves_to.length > 1) {
    chainEv.data.chain.evolves_to.map((el) => {
      evArr.push(getImg(getNum(el.species.url)));
      evArr.push(el.species.name);
      return evArr;
    });

    setEvolution(evArr);
  } else if (chainEv.data.chain.species.name) {
    evArr.push(getImg(getNum(chainEv.data.chain.species.url)));
    evArr.push(chainEv.data.chain.species.name);
    if (chainEv.data.chain.evolves_to[0]) {
      evArr.push(getImg(getNum(chainEv.data.chain.evolves_to[0].species.url)));
      evArr.push(chainEv.data.chain.evolves_to[0].species.name);

      if (chainEv.data.chain.evolves_to[0].evolves_to[0]) {
        evArr.push(
          getImg(
            getNum(chainEv.data.chain.evolves_to[0].evolves_to[0].species.url)
          )
        );
        evArr.push(chainEv.data.chain.evolves_to[0].evolves_to[0].species.name);
      }
    }

    setEvolution(evArr);
  }
  return evArr;
};

export default getEvolution;
