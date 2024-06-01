import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./redux/reducer/LoginReducer";
import productReducer from "./redux/reducer/ProductReducer";
import ProductDetailReducer from "./redux/reducer/ProductDetailReducer";
import CartReducer from "./redux/reducer/CartReducer";
const RootReducer = combineReducers({
  LoginReducer,
  productReducer,
  ProductDetailReducer,
  CartReducer,
  
});

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));
export default store;


