import { useContext } from "react";
/*eslint-disable */
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import { Context } from "../Context";
const MainPage = () => {
  const { query, setQuery, data, isError, isLoading, doFetch } = useContext(
    Context
  );
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          doFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
      <Filter />
    </>
  );
};

export default MainPage;
