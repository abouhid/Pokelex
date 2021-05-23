const genReducer = (state, action = { type: "All", payload: { id: 1 } }) => {
  switch (action.type) {
    case "Gen I":
      return action.payload.filter((el) => el.id > 0 && el.id <= 150);
    case "Gen II":
      return action.payload.filter((el) => el.id > 151 && el.id <= 250);
    case "Gen III":
      return action.payload.filter((el) => el.id > 251 && el.id <= 385);
    case "Gen IV":
      return action.payload.filter((el) => el.id > 386 && el.id <= 492);
    case "Gen V":
      return action.payload.filter((el) => el.id > 493 && el.id <= 648);
    case "Gen VI":
      return action.payload.filter((el) => el.id > 649 && el.id <= 720);
    case "Gen VII":
      return action.payload.filter((el) => el.id > 721 && el.id <= 808);
    case "Gen VIII":
      return action.payload.filter((el) => el.id > 809 && el.id <= 897);
    default:
      return "All";
  }
};

export default genReducer;
