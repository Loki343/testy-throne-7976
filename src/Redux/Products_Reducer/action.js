import axios from "axios";
import { GET_MEN_PRODUCTS_SUCCESS, PRODUCTS_FAILURE, PRODUCTS_REQUEST } from "./actionTypes";

export const getMenProducts=()=>(dispatch)=>{
  dispatch({type:PRODUCTS_REQUEST});
  axios.get("http://localhost:8080/men")
  .then((res)=>{
    dispatch({type:GET_MEN_PRODUCTS_SUCCESS , payload:res.data})
  }).catch(()=>{
    dispatch({type:PRODUCTS_FAILURE});
  })

};

export const getWoMenProducts=()=>{

};