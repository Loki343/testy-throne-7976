import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: localStorage.getItem('name') || false,
  user: [],
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // for signup
    case SIGNUP_LOADING:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };

    //default case
    default:
      return state;
  }
};
