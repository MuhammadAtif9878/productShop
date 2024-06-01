

const initialState = {
    productList: [],
    loading: false,
  
  };
  
  const productReducer = (state = initialState, action) => {
    //   console.log("🚀 ~ file: WeatherReducer.js:7 ~ WeatherAction ~ action:", action)
  
    switch (action.type) {
      case "PRODUCT_DATA_SUCCESS":
        const data = action.payload;
        return {
          ...state,
          loading: false,
          productList: { data }
        };
      case 'PRODUCT_DATA_REQUEST':
        return {
  
          ...state,
          loading: true,
  
        }
      case "PRODUCT_DATA_FAIL":
        const message = action.payload
        return {
          ...state,
          loading: false,
          productList: { message }
        }
  
      default: return state
  
    }
  };
  export default productReducer;
  
  