import axios from 'axios';
import {
  ADD_TO_CART_PROCESS, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL,
  GET_CART_PROCESS, GET_CART_SUCCESS, GET_CART_FAIL,
  DELETE_FROM_CART_PROCESS, DELETE_FROM_CART_SUCCESS, DELETE_FROM_CART_FAIL,
  EDIT_CART_ITEM_PROCESS,EDIT_CART_ITEM_SUCCESS,EDIT_CART_ITEM_FAIL
} from './actionType'


const url = 'http://localhost:8080/cartData';


// ========================post card data=====================================

export const addToCartPusher = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_PROCESS })
console.log("This console on action .js",product)
  axios.post(url, {
    productId: product.productId,
    color: product.color,
    product_price: product.product.price,
    total_Price: (product.product.price * product.quantity),
    quantity: product.quantity,
    title: product.product.name,
    image: product.product.image[0],
    product_origin: product.product,
  }).then((response) => {
    console.log(response)
    dispatch({ type: ADD_TO_CART_SUCCESS })
  }).then((error) => {
    dispatch({ type: ADD_TO_CART_FAIL })
  })
}

// =======================get cart data==============================================

export const getCartData = () => (dispatch) => {

  dispatch({ type: GET_CART_PROCESS });
  axios.get(url)
    .then((res) => {
      dispatch({ type: GET_CART_SUCCESS, payload: res.data })
    }).catch(() => {
      dispatch({ type: GET_CART_FAIL });
    })

}



// =============================Delete cart data=============================================

export const deleteCartData = (id) => ((dispatch) => {
  dispatch({ type: DELETE_FROM_CART_PROCESS })
  return axios.delete(`${url}/${id}`).then((response) => {

    dispatch({ type: DELETE_FROM_CART_SUCCESS })
  }).then((error) => {
    dispatch({ type: DELETE_FROM_CART_FAIL })
  })
})



// =========================edit cart data==================================================================
export const editCartData = (dataObj, id) => (dispatch) => {
  dispatch({ type: EDIT_CART_ITEM_PROCESS })
  return axios.patch(`${url}/${id}`, dataObj).then((response) => {

    dispatch({ type: EDIT_CART_ITEM_SUCCESS })
  }).then((error) => {
    dispatch({ type: EDIT_CART_ITEM_FAIL })
  })
}