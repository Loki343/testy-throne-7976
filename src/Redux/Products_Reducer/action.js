import axios from "axios";

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
//const URL="http://localhost:8080"
const URL = "https://deployed-server-byloki.onrender.com";

export const getMenProducts = (Obj) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  axios
    .get(`${URL}/men`, Obj)
    .then((res) => {
      dispatch({ type: GET_MEN_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const getWoMenProducts = (Obj) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  axios
    .get(`${URL}/women`, Obj)
    .then((res) => {
      dispatch({ type: GET_WOMEN_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const getCart = async ()=> {
  let res = await axios.get(`http://localhost:8080/cart`)
  let data = res.data
  return data
}


export const addtoCartApi = async (data)=>{
    let res = await axios.post(`http://localhost:8080/cart`,data)
}


// cart post request
export const addToCart = (data,toast,toast2)=>async (dispatch)=>{
  dispatch({type:PRODUCTS_REQUEST})
  try {
      let res = await addtoCartApi(data)
      let getData = await getCart()
      console.log(data)
      dispatch({type:ADD_TO_CART_SUCCESS,payload:getData})
      toast()
  } catch {
      dispatch({type:PRODUCTS_FAILURE})
      toast2()
  }
}

// export const addToCart = (id,obj, toast, toast2) => (dispatch) => {
//   dispatch({ type: PRODUCTS_REQUEST });
//   axios
//     .post(`http://localhost:8080/cart/${id}`, obj)
//     .then(() => {
//       dispatch({ type: ADD_TO_CART_SUCCESS});
//       toast();
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCTS_FAILURE });
//       toast2();
//     });
// };

export const getCartProducts = () => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  return axios
    .get("http://localhost:8080/cart")
    .then((res) => {
      dispatch({ type: GET_FROM_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const updateCartProduct = (id, updateData) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  return axios
    .patch(`http://localhost:8080/cart/${id}`, updateData).then((response) => {
      dispatch({ type: UPDATE_CART_SUCCESS, payload: response.data });
    }).catch((error) => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
}


//Pagination
export const handlePageChange = (newPage) => {
  return { type: HANDLE_PAGE_CHANGE, payload: newPage };
};

// API Call For single Product Call

export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  axios
    .get(`${URL}/men/${id}`)
    .then((res) => {
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};





export const removeCartdata = (id) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  return axios
    .delete(`http://localhost:8080/cart/${id}`).then((response) => {
      dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: response.data });
    }).catch((error) => {
      dispatch({ type: PRODUCTS_FAILURE });
    })
}