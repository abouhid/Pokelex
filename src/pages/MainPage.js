import { useContext } from "react";
/*eslint-disable */
import Filter from "../components/Filter";
import { Context } from "../Context";
const MainPage = () => {
  const { query, setQuery, data, isError, isLoading, doFetch } = useContext(
    Context
  );
  return (
    <>
      {isError && <div>Pokemon Not Found!</div>}
      {isLoading ? <div>Loading ...</div> : <></>}
      <Filter />
    </>
  );
};

export default MainPage;
