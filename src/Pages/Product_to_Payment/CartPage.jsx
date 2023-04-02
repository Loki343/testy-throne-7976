
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TotalOrder from '../../Components/AddToCart_Payment_Components/CartPageComponents.jsx/TotalOrder';
import  ShoppingCart, { CartItem } from '../../Components/AddToCart_Payment_Components/CartPageComponents.jsx/CartItem';
import { getCartData ,deleteCartData,editCartData} from '../../Redux/CartReducer/action';



const CartPage = () => {

  const dispatch = useDispatch();
  const { isLoading, isError, cartData } = useSelector((store) => store.cartReducer)

  // const [cartItems, setCartItems] = useState(items);

const handleRemove = (productId) => {
// setCartItems((cartData) =>
// cartData.filter((item) => item.product.id !== productId)
// );
};

const handleUpdate = (productId, newQuantity) => {
// setCartItems((cartData) =>
// cartData.map((item) =>
// item.product.id === productId
// ? { ...item, quantity: newQuantity }
// : item
// )
// );
};



 






  // console.log("cartData",cartData)


  useEffect(() => {

    getCartData();

  }, [])


  return (
    <Box display={'flex' } justifyContent={'space-between'} flexWrap={'wrap'}>  
    <Box w={{ base: '100%', md: '680px' }}>

      {/* {cartData.length > 0 && cartData.map((element) => {
        return <CartItem key={element.id} product={element}   />
      })} */}

      <ShoppingCart items={cartData} onRemove={handleRemove} onUpdate={handleUpdate} />

    </Box>
    <TotalOrder />
    </Box>
  )
}

export default CartPage



