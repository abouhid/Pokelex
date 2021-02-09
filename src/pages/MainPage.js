import { connect } from "react-redux";
import PropTypes from "prop-types";

import PokeGrid from "../containers/PokeGrid";
import pokeball from "../images/pokeball.svg";

const MainPage = ({ data, isLoading }) => {
  const loading = typeof data === "undefined" || isLoading;
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img
            src={pokeball}
            className="loading-pokeball"
            alt="pokeball-icon"
          />
        </div>
      ) : (
        <PokeGrid data={data} />
      )}
    </>
  );
};
MainPage.defaultProps = {
  data: [],
};
MainPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.string })),
  isLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = ({ dataFetchReducer, genReducer }) => ({
  dataFetchReducer,
  genReducer,
});

export default connect(mapStateToProps, null)(MainPage);
