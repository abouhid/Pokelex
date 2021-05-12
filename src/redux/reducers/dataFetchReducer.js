const dataFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "CURRENT_PAGE":
      return { ...state, page: action.payload };
    default:
      return (
        {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        } || {}
      );
  }
};

export default dataFetchReducer;
