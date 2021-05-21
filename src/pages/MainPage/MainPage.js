/*eslint-disable */
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PokeGrid from "./containers/PokeGrid";
import pokeball from "../../images/pokeball.svg";
import PageComponent from "./components/PageComponent";
const MainPage = ({ data, filteredPokemon, isLoading, page }) => {
  const totalPokemon =
    filteredPokemon === "All" ? data.length : filteredPokemon.length;
  const PAGE_LIMIT = 12;
  const PAGE_NEIGHBOURS = 2;
  const totalPages = Math.ceil(totalPokemon / PAGE_LIMIT);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      ) : (
        <>
          {console.log("totalPokemon", totalPokemon)}
          <PageComponent
            totalPages={totalPages}
            totalRecords={totalPokemon}
            pageLimit={PAGE_LIMIT}
            pageNeighbours={PAGE_NEIGHBOURS}
          />
          <PokeGrid data={data} filteredPokemon={filteredPokemon} page={page} />
        </>
      )}
    </>
  );
};

MainPage.defaultProps = {
  data: [],
  filteredPokemon: "All",
};

MainPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.string })),
  filteredPokemon: PropTypes.arrayOf(PropTypes.string),
  page: PropTypes.number,
};

const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  isLoading: dataFetchReducer.isLoading,
  page: dataFetchReducer.page,
  data: dataFetchReducer.data,
  filteredPokemon: genReducer,
});

export default connect(mapStateToProps, null)(MainPage);
