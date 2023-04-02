import axios from "axios";


import { GET_MEN_PRODUCTS_SUCCESS, GET_WOMEN_PRODUCTS_SUCCESS,PRODUCTS_FAILURE, PRODUCTS_REQUEST ,GET_SINGLE_PRODUCT_SUCCESS, HANDLE_PAGE_CHANGE} from "./actionTypes"
//const URL="http://localhost:8080"
const URL="https://deployed-server-byloki.onrender.com"



export const getMenProducts=(Obj)=>(dispatch)=>{
  dispatch({type:PRODUCTS_REQUEST});
  axios.get(`${URL}/men`,Obj)
  .then((res)=>{
    dispatch({type:GET_MEN_PRODUCTS_SUCCESS , payload:res.data})
  }).catch(()=>{
    dispatch({type:PRODUCTS_FAILURE});
  })

};

export const getWoMenProducts=(Obj)=>(dispatch)=>{
  dispatch({type:PRODUCTS_REQUEST});
  axios.get(`${URL}/women`,Obj)
  .then((res)=>{
    dispatch({type:GET_WOMEN_PRODUCTS_SUCCESS , payload:res.data})
  }).catch(()=>{
    dispatch({type:PRODUCTS_FAILURE});
  })
};


//Pagination
export const handlePageChange=(newPage)=>{
  return {type:HANDLE_PAGE_CHANGE , payload:newPage}
};










// API Call For single Product Call

export const getSingleProduct=(id)=>(dispatch)=>{
  dispatch({type:PRODUCTS_REQUEST});
 
  axios.get(`${URL}/men/${id}`) 
  .then((res)=>{
    
    dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload:res.data})
  }).catch(()=>{
    dispatch({type:PRODUCTS_FAILURE});
  })
}

