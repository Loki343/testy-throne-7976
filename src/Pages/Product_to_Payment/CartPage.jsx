
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TotalOrder from '../../Components/AddToCart_Payment_Components/CartPageComponents.jsx/TotalOrder';
import CartProductCard from '../../Components/AddToCart_Payment_Components/CartPageComponents.jsx/CartProductCard';
import { getCartData ,deleteCartData,editCartData} from '../../Redux/CartReducer/action';



const CartPage = () => {

  const dispatch = useDispatch();
  const { isLoading, isError, cartData } = useSelector((store) => store.cartReducer)

  
 






  // console.log("cartData",cartData)


  useEffect(() => {

    getCartData();

  }, [])


  return (
    <Box display={'flex' } justifyContent={'space-between'} flexWrap={'wrap'}>  
    <Box w={{ base: '100%', md: '680px' }}>

      {cartData.length > 0 && cartData.map((element) => {
        return <CartProductCard key={element.id} product={element}   />
      })}

    </Box>
    <TotalOrder />
    </Box>
  )
}

export default CartPage



