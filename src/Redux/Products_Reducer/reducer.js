import { GET_MEN_PRODUCTS_SUCCESS, GET_WOMEN_PRODUCTS_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQUEST } from "./actionTypes";

export const initialState={
    isLoading:false,
    isError:false,
    products:[],
}

export const reducer=(state=initialState ,{type,payload})=>{
    switch(type){
        case PRODUCTS_REQUEST:
            return {...state , isLoading:true };
        case GET_MEN_PRODUCTS_SUCCESS:
            return {...state , isLoading:false , products:payload};
        case GET_WOMEN_PRODUCTS_SUCCESS:
            return {...state , isLoading:false , products:payload};       
        case PRODUCTS_FAILURE:
            return {...state , isLoading:false , isError:true};
        default:
            return state;
    }
}