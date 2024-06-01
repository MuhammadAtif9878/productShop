

const initialState = {
    productDetailtList: [],
    loading: false,
  
  };
  //console.log("🚀 ~ file: ProductDetailReducer.js:8 ~ initialState:", initialState)
  
  const ProductDetailReducer = (state = initialState, action) => {
    //   console.log("🚀 ~ file: WeatherReducer.js:7 ~ WeatherAction ~ action:", action)
  
    switch (action.type) {
      case "PRODUCT_DATA_DETAIL_SUCCESS":
        const data = action.payload;
        // console.log("🚀 ~ file: ProductDetailReducer.js:16 ~ ProductDetailReducer ~ data:", data)
        
        return {
          ...state,
          loading: false,
          productDetailtList: data  
        };
      case 'PRODUCT_DATA_DETAIL_REQUEST':
        return {
  
          ...state,
          loading: true,
  
        }
      case "PRODUCT_DATA_DETAIL_FAIL":
        const message = action.payload
        return {
          ...state,
          loading: false,
          productDetailtList: { message }
        }
  
      default: return state
       }
  };
  export default ProductDetailReducer;












// const initialState = {
//     productDetailtList: [],
//     loading: false,
  
//   };
  
//   const ProductDetailReducer = (state = initialState, action) => {
      
  
//     switch (action.type) {
//       case "PRODUCT_DATA_DETAIL_SUCCESS":
//         const data = action.payload; 
//         return {
//           ...state,
//           loading: false,
//           productDetailtList: { data }
         
//         };
        
//       case 'PRODUCT_DATA_DETAIL_REQUEST':
//         return {

//           ...state,
//           loading: true,

//         }
//       case "PRODUCT_DATA_DETAIL_FAIL":
//         const message = action.payload
       
//         return {
//           ...state,
//           loading: false,
//           productDetailtList: { message }
//         }
  
//       default: return state
  
//     }
     
//   };
  
//   export default ProductDetailReducer;
  