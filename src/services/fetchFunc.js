import axios from "axios";

const fetchFunc = async (url, dispatch) => {
  dispatch({ type: "FETCH_INIT" });
  if (url !== "All") {
    const newUrl = url.map((el) => `https://pokeapi.co/api/v2/pokemon/${el}`);
    try {
      const pokeData1 = await Promise.all(newUrl.map(async (el) => axios(el)));
      const pokeData = pokeData1.map((el) => el.data);

      dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  }
};

export default fetchFunc;
