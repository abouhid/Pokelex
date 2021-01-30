const genReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_GEN_I":
      return "test";
    case "FILTER_GEN_II":
      return "test";
    case "FILTER_GEN_III":
      return "test";
    case "FILTER_GEN_IV":
      return "test";
    case "FILTER_GEN_V":
      return "test";
    case "FILTER_GEN_VI":
      return console.log("aaa");
  }
};

export default genReducer;
