const getGen = (value) => {
  switch (value) {
    case "Gen I":
      return [...new Array(24).keys()].map((el) => el + 1);
    case "Gen II":
      return [...new Array(24).keys()].map((el) => el + 152);
    case "Gen III":
      return [...new Array(24).keys()].map((el) => el + 252);
    case "Gen IV":
      return [...new Array(24).keys()].map((el) => el + 387);
    case "Gen V":
      return [...new Array(24).keys()].map((el) => el + 495);
    case "Gen VI":
      return [...new Array(24).keys()].map((el) => el + 650);
    case "Gen VII":
      return [...new Array(24).keys()].map((el) => el + 722);

    default:
      return [...new Array(24).keys()].map((el) => el + 1);
  }
};

export default getGen;
