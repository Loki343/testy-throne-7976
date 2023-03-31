import axios from "axios"
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

        // POST
export const addProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})

    axios.post("http://localhost:8080/products",data).then(()=>{
        dispatch({type: ADD_PRODUCT_SUCCESS})
        
    })
    .catch(()=>{
        dispatch({type: PRODUCT_FAILURE})
    })
}

        // GET
        export const getProduct = () =>  (dispatch) => {
            dispatch({type: PRODUCT_REQUEST})
        
            axios.get("http://localhost:8080/products").then((res)=>{
                console.log(res)
                dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
                
            })
            .catch(()=>{
                dispatch({type: PRODUCT_FAILURE})
            })
        }