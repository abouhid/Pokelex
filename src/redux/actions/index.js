const filterGen = (pokemon) => {
  return {
    type: "FILTER_GEN",
    payload: pokemon,
  };
};

export default filterGen;
