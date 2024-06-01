const initialState = {
  cart: [],
  id:'',
  
};

const CartReducer = (state = initialState, action) => {
//console.log("🚀 ~ file: CartReducer.js:9 ~ CartReducer ~ action:", action)

  switch (action.type) {
    case "CART_ADDED":
     let tempState=true;
    state.cart.forEach((element)=>{
    if(element.id===action.payload.id){
      tempState=false;
      // element.quantity++
    }
  })
  if(tempState===true){
    return{
      cart: [...state.cart,action.payload]
    }
  }
  case "INCREMENT":
    state.cart.forEach((element) => {
      if (element.id === action.payload.id) {
        element.quantity++;
        element.total = element.quantity * element.price;
      }
    });
    return {
      cart: [...state.cart],
    };
  case "DECREMENT":
    state.cart.forEach((element) => {
      if (element.id === action.payload.id) {
        element.quantity--;
        element.total = element.quantity * element.price;
      }
    });
    return {
      cart: [...state.cart],
    }; 
    case "DELETE":
      return {
        cart: [...state.cart.filter((item) => item.id !==action.payload.id)]
      };
      default:
        return state;
    }
};

export default CartReducer;
