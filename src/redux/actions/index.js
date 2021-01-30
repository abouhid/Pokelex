const filterGen = (pokemon) => {
  return {
    type: "FILTER_GEN_I",
    payload: pokemon,
  };
};

export default filterGen;
