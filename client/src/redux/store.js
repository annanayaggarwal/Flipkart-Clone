import { createStore, combineReducers, applyMiddleware } from "redux";
//applymiddle is used jb hame devtool ke ande ek middleware ko paas krna ho
import {
  getproductsreducer,
  getproductDetailsReducer,
} from "./reducers/productreducer";

import { cartreducer } from "./reducers/cartreducer";

import { thunk } from "redux-thunk"; // thunk is basically a middleware use to call api in action
import { composeWithDevTools } from "redux-devtools-extension";

//bhai dekh yaha pe ek reducer nhi hai boht saare hai isliye ek comine reducer banaya hai
const reducer = combineReducers({
  getproducts: getproductsreducer,
  getProductDetails: getproductDetailsReducer,
  cart: cartreducer,
});

const middleware = [thunk]; // Correct middleware array name

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
