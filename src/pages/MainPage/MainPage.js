/*eslint-disable */
import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PokeGrid from "./containers/PokeGrid";
import pokeball from "../../images/pokeball.svg";
import PageComponent from "./components/PageComponent";
const MainPage = ({ data, filteredPokemon, isLoading }) => {
  const [page, setPage] = useState(1);
  const totalPokemon =
    filteredPokemon === "All" ? data.length : filteredPokemon.length;
  const PAGE_LIMIT = 16;
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
          <PageComponent
            totalPages={totalPages}
            totalRecords={totalPokemon}
            pageLimit={PAGE_LIMIT}
            pageNeighbours={PAGE_NEIGHBOURS}
            setPage={setPage}
          />
          <PokeGrid
            data={data}
            filteredPokemon={filteredPokemon}
            page={page}
            pageLimit={PAGE_LIMIT}
          />
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
};

const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  isLoading: dataFetchReducer.isLoading,
  data: dataFetchReducer.data,
  filteredPokemon: genReducer,
});

export default connect(mapStateToProps, null)(MainPage);
