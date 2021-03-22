import axios from "axios";

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
  ice: "#98D8D8",
};
const getImg = (num) => {
  const el = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
  return el;
};
const getName = (num) => {
  const el = num;
  return el;
};

const getTypes = (data) => {
  const types = data.types.map((el) => (
    <span
      key={el.type.name}
      style={{ backgroundColor: `${colors[el.type.name]}` }}
      className="types"
    >
      {el.type.name.toUpperCase()} {""}
    </span>
  ));
  return types;
};
const getNum = (url) => {
  const el = url.replace(/.*\D(?=\d)|\D+$/g, "");
  return el;
};

const getEvolution = async (
  pokemonId,
  setSpecies,
  setEvolution,
  evArr,
  setData
) => {
  const result = await axios(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
  const result2 = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  const chainEv = await axios(result.data.evolution_chain.url);

  setSpecies(result.data);
  setData(result2.data);

  // dispatch({ type: "FETCH_SUCCESS", payload: result.data });

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
const getGen = (value) => {
  switch (value) {
    case "Gen I":
      return [...new Array(30).keys()].map((el) => el + 1);
    case "Gen II":
      return [...new Array(30).keys()].map((el) => el + 152);
    case "Gen III":
      return [...new Array(30).keys()].map((el) => el + 252);
    case "Gen IV":
      return [...new Array(30).keys()].map((el) => el + 387);
    case "Gen V":
      return [...new Array(30).keys()].map((el) => el + 495);
    case "Gen VI":
      return [...new Array(30).keys()].map((el) => el + 650);
    case "Gen VII":
      return [...new Array(30).keys()].map((el) => el + 722);

    default:
      return [...new Array(30).keys()].map((el) => el + 1);
  }
};

export default getGen;

export { getTypes, getNum, getEvolution, getGen, getName, getImg };
