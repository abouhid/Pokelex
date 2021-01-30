import axios from "axios";

const fetchFunc = async (url, maxSlice, didCancel, dispatch) => {
  dispatch({ type: "FETCH_INIT" });

  const newUrl = url
    .slice(0, Math.min(maxSlice, url.length))
    .map((el) => `https://pokeapi.co/api/v2/pokemon/${el.toLowerCase()}`);
  try {
    const pokeData1 = await Promise.all(newUrl.map(async (el) => axios(el)));
    const pokeData = pokeData1.map((el) => el.data);
    if (!didCancel) {
      dispatch({ type: "FETCH_SUCCESS", payload: pokeData });
    }
  } catch (error) {
    console.log(error, "error");
    if (!didCancel) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  }
};

export default fetchFunc;
