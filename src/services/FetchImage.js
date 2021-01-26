export function createPokeImage(pokeID) {
  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
  containerDiv.append(pokeImage);
}
