const genReducer = (state, action) => {
  switch (action.type) {
    case "Gen I":
      return [0, 150];
    case "Gen II":
      return [151, 250];
    case "Gen III":
      return [251, 385];
    case "Gen IV":
      return [386, 492];
    case "Gen V":
      return [493, 648];
    case "Gen VI":
      return [649, 720];
    case "Gen VII":
      return [721, 808];
    case "Gen VIII":
      return [809, 897];
    default:
      return [0, 897];
  }
};

export default genReducer;
