import { useContext } from "react";
/*eslint-disable */
import FetchData from "../services/FetchData";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import { Context } from "../Context";
const MainPage = () => {
  const { query, setQuery } = useContext(Context);
  const [{ data, isLoading, isError }, doFetch] = FetchData();
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Filter query={query} />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
    </>
  );
};

export default MainPage;
