import { GET_MEN_PRODUCTS_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQUEST,GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";

export const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {},
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCTS_REQUEST:
            return { ...state, isLoading: true };
        case GET_MEN_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: payload }
        case PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: true };

        case GET_SINGLE_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, singleProduct: payload };
        default:
            return state;
    }
}