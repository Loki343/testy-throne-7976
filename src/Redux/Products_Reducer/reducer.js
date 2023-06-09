import {
  GET_MEN_PRODUCTS_SUCCESS,
  GET_WOMEN_PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  HANDLE_PAGE_CHANGE,
  ADD_TO_CART_SUCCESS,
  GET_FROM_CART_SUCCESS,
  UPDATE_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from "./actionTypes";

export const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: {},
  cart: [],
  cartLength:0,
  activePage: 1,
  perPage: 8,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_MEN_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_WOMEN_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case HANDLE_PAGE_CHANGE:
      return { ...state, isLoading: false, activePage: payload };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, singleProduct: payload };

    case ADD_TO_CART_SUCCESS:
      return { ...state, isLoading: false };

    case GET_FROM_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload ,cartLength:payload.length};

    case UPDATE_CART_SUCCESS:
      return { ...state, isLoading: false, };

    case REMOVE_FROM_CART_SUCCESS:
      return { ...state, isLoading: false, };

    default:
      return state;
  }
};
