import axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_FETCH } from "./type";

export const productFetch = (id) => {
  return (dispatch) => {
    axios.get("http://localhost:3004/blogs/" + id).then((res) => {
      dispatch({ type: PRODUCT_FETCH, payload: res.data });
    });
  };
};

export const productsFetch = (categories) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3004/blogs?categories=" + categories)
      .then((res) => {
        dispatch({ type: PRODUCTS_FETCH, payload: res.data });
      });
  };
};
