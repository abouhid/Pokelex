// const genReducer = (state, action) => {
//   console.log(action, "action");
//   switch (action.type) {
//     case "Gen I":
//       return [0, 150];
//     case "Gen II":
//       return [151, 250];
//     case "Gen III":
//       return [251, 385];
//     case "Gen IV":
//       return [386, 492];
//     case "Gen V":
//       return [493, 648];
//     case "Gen VI":
//       return [649, 720];
//     case "Gen VII":
//       return [721, 808];
//     case "Gen VIII":
//       return [809, 897];
//     default:
//       return [0, 897];
//   }
// };
/*eslint-disable */
// export default genReducer;
const genReducer = (state, action = { type: "All", payload: { id: 4 } }) => {
  switch (action.type) {
    case "Gen I":
      return action.payload.filter((el) => 0 < el.id && el.id < 150);
    case "Gen II":
      return action.payload.filter((el) => 151 < el.id && el.id < 250);
    case "Gen III":
      return action.payload.filter((el) => 251 < el.id && el.id < 385);
    case "Gen IV":
      return action.payload.filter((el) => 386 < el.id && el.id < 492);
    case "Gen V":
      return action.payload.filter((el) => 493 < el.id && el.id < 648);
    case "Gen VI":
      return action.payload.filter((el) => 649 < el.id && el.id < 720);
    case "Gen VII":
      return action.payload.filter((el) => 721 < el.id && el.id < 808);
    case "Gen VIII":
      return action.payload.filter((el) => 809 < el.id && el.id < 897);
    default:
      return "All";
  }
};

export default genReducer;
