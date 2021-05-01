import { connect } from "react-redux";
import PropTypes from "prop-types";

import PokeGrid from "./containers/PokeGrid";
import pokeball from "../../images/pokeball.svg";

const MainPage = ({ isLoading }) => {
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
        <PokeGrid />
      )}
    </>
  );
};
MainPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = ({ dataFetchReducer }) => ({
  isLoading: dataFetchReducer.isLoading,
});

export default connect(mapStateToProps, null)(MainPage);
