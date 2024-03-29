import axios from "axios";
import * as actionTypes from "../constants/cartconstants";
const url = "http://localhost:8000";

export const addtocart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_CART_ERROR,
      payload: error.message,
    });
  }
};

export const removefromcart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
