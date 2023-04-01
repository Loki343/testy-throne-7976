
import {
    ADD_TO_CART_PROCESS, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL,
    GET_CART_PROCESS, GET_CART_SUCCESS, GET_CART_FAIL,
    DELETE_FROM_CART_PROCESS, DELETE_FROM_CART_SUCCESS, DELETE_FROM_CART_FAIL,
    EDIT_CART_ITEM_PROCESS,EDIT_CART_ITEM_SUCCESS,EDIT_CART_ITEM_FAIL
  } from './actionType'



const initialState = {
    isLoading: false,
    isError: false,
    cartData:[],

}



export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // =================Add to cart============================
        case ADD_TO_CART_PROCESS: {
            return { ...state, isLoading: true }
        }
        case ADD_TO_CART_SUCCESS: {    
            return { ...state, isLoading: false }
        }
        case ADD_TO_CART_FAIL: {
            return { ...state, isLoading: false, isError: false }
        }


// ==========================get cart==========================================
        case GET_CART_PROCESS: {
            return { ...state, isLoading: true }
        }
        case GET_CART_SUCCESS: {
            // console.log("cartData", state.cartData)
            return { ...state, isLoading: false,cartData:payload }
        }
        case GET_CART_FAIL: {
            return { ...state, isLoading: false, isError: false }
        }

// ============================edit cart========================================
case EDIT_CART_ITEM_PROCESS: {
    return { ...state, isLoading: true }
}
case EDIT_CART_ITEM_SUCCESS: {    
    return { ...state, isLoading: false }
}
case EDIT_CART_ITEM_FAIL: {
    return { ...state, isLoading: false, isError: false }
}

// ============================delete cart================================

case DELETE_FROM_CART_PROCESS: {
    return { ...state, isLoading: true }
}
case DELETE_FROM_CART_SUCCESS: {    
    return { ...state, isLoading: false }
}
case DELETE_FROM_CART_FAIL: {
    return { ...state, isLoading: false, isError: false }
}


        default: return state;
    }
}