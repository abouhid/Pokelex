const changePage = (pokeData) => {
  return {
    type: "CHANGE_PAGE",
    payload: pokeData,
  };
};

export default changePage;
