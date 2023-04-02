import {  ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError:false,
    products:[]
    }

    export const productReducer = (state=initialState, {type, payload}) =>{
        switch(type){
            case PRODUCT_REQUEST:
                return {...state, isLoading: true}

            case ADD_PRODUCT_SUCCESS:
                return {...state, isLoading:false}

            case GET_PRODUCT_SUCCESS:
                    return {...state, isLoading:false, isError:false, products:payload}

            case PRODUCT_FAILURE:
                return {...state, isLoading:false, isError:true}

           
           
            default:
                return state;
        }
        }