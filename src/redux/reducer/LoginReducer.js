const initialState = {
  list: [],
  loading: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      const data = action.payload;
  
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
          },
        ],
      };

    case "GET_DATA_API":
      return {
        ...state,
        loading: true,
      };

    case "GET_DATA_FAIL":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default LoginReducer;
