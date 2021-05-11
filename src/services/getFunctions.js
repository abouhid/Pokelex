import axios from "axios";
import pokemon from "pokemon";

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
const gen8 = [
  "Grookey",
  "Thwackey",
  "Rillaboom",
  "Scorbunny",
  "Raboot",
  "Cinderace",
  "Sobble",
  "Drizzile",
  "Inteleon",
  "Skwovet",
  "Greedent",
  "Rookidee",
  "Corvisquire",
  "Corviknight",
  "Blipbug",
  "Dottler",
  "Orbeetle",
  "Nickit",
  "Thievul",
  "Gossifleur",
  "Eldegoss",
  "Wooloo",
  "Dubwool",
  "Chewtle",
  "Drednaw",
  "Yamper",
  "Boltund",
  "Rolycoly",
  "Carkol",
  "Coalossal",
  "Applin",
  "Flapple",
  "Appletun",
  "Silicobra",
  "Sandaconda",
  "Cramorant",
  "Arrokuda",
  "Barraskewda",
  "Toxel",
  "Toxtricity",
  "Sizzlipede",
  "Centiskorch",
  "Clobbopus",
  "Grapploct",
  "Sinistea",
  "Polteageist",
  "Hatenna",
  "Hattrem",
  "Hatterene",
  "Impidimp",
  "Morgrem",
  "Grimmsnarl",
  "Obstagoon",
  "Perrserker",
  "Cursola",
  "Sirfetch'd",
  "Mr. Rime",
  "Runerigus",
  "Milcery",
  "Alcremie",
  "Falinks",
  "Pincurchin",
  "Snom",
  "Frosmoth",
  "Stonjourner",
  "Eiscue",
  "Indeedee",
  "Morpeko",
  "Cufant",
  "Copperajah",
  "Dracozolt",
  "Arctozolt",
  "Dracovish",
  "Arctovish",
  "Duraludon",
  "Dreepy",
  "Drakloak",
  "Dragapult",
  "Zacian",
  "Zamazenta",
  "Eternatus",
  "Kubfu",
  "Urshifu",
  "Zarude",
  "Regieleki",
  "Regidrago",
  "Glastrier",
  "Spectrier",
  "Calyrex",
];

const gen8Obj = {
  810: "Grookey",
  811: "Thwackey",
  812: "Rillaboom",
  813: "Scorbunny",
  814: "Raboot",
  815: "Cinderace",
  816: "Sobble",
  817: "Drizzile",
  818: "Inteleon",
  819: "Skwovet",
  820: "Greedent",
  821: "Rookidee",
  822: "Corvisquire",
  823: "Corviknight",
  824: "Blipbug",
  825: "Dottler",
  826: "Orbeetle",
  827: "Nickit",
  828: "Thievul",
  829: "Gossifleur",
  830: "Eldegoss",
  831: "Wooloo",
  832: "Dubwool",
  833: "Chewtle",
  834: "Drednaw",
  835: "Yamper",
  836: "Boltund",
  837: "Rolycoly",
  838: "Carkol",
  839: "Coalossal",
  840: "Applin",
  841: "Flapple",
  842: "Appletun",
  843: "Silicobra",
  844: "Sandaconda",
  845: "Cramorant",
  846: "Arrokuda",
  847: "Barraskewda",
  848: "Toxel",
  849: "Toxtricity",
  850: "Sizzlipede",
  851: "Centiskorch",
  852: "Clobbopus",
  853: "Grapploct",
  854: "Sinistea",
  855: "Polteageist",
  856: "Hatenna",
  857: "Hattrem",
  858: "Hatterene",
  859: "Impidimp",
  860: "Morgrem",
  861: "Grimmsnarl",
  862: "Obstagoon",
  863: "Perrserker",
  864: "Cursola",
  865: "Sirfetch'd",
  866: "Mr. Rime",
  867: "Runerigus",
  868: "Milcery",
  869: "Alcremie",
  870: "Falinks",
  871: "Pincurchin",
  872: "Snom",
  873: "Frosmoth",
  874: "Stonjourner",
  875: "Eiscue",
  876: "Indeedee",
  877: "Morpeko",
  878: "Cufant",
  879: "Copperajah",
  880: "Dracozolt",
  881: "Arctozolt",
  882: "Dracovish",
  883: "Arctovish",
  884: "Duraludon",
  885: "Dreepy",
  886: "Drakloak",
  887: "Dragapult",
  888: "Zacian",
  889: "Zamazenta",
  890: "Eternatus",
  891: "Kubfu",
  892: "Urshifu",
  893: "Zarude",
  894: "Regieleki",
  895: "Regidrago",
  896: "Glastrier",
  897: "Spectrier",
  898: "Calyrex",
};
const allPokemonArr = pokemon.all();

const getIds = (valueTyped) => {
  const filterArrName = allPokemonArr.filter((el) =>
    el.toLowerCase().includes(valueTyped)
  );
  const filterArrName8 = gen8.filter((el) =>
    el.toLowerCase().includes(valueTyped)
  );

  const filterArrNum = filterArrName.map((el) => pokemon.getId(el));

  const filterArrNum8 = filterArrName8.map((el) =>
    Object.keys(gen8Obj).find((key) => gen8Obj[key] === el)
  );

  const filteredArr = filterArrNum.concat(filterArrNum8);

  return filteredArr;
};

const getImg = (num) => {
  const el = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
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
    case "Gen VIII":
      return [...new Array(30).keys()].map((el) => el + 810);

    default:
      return [...new Array(30).keys()].map((el) => el + 1);
  }
};

export default getGen;

export { getTypes, getNum, getEvolution, getGen, getImg, getIds };
