// export function createPokeImage(pokeID) {
//   let pokeImage = document.createElement("img");
//   pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
//   containerDiv.append(pokeImage);
// }

function fetchPokemonData({ url }) {
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      return pokeData;
    });
}

function getList() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        return fetchPokemonData(pokemon);
      });
    });
}

export default getList;
