import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../Components/AddToCart_Payment_Components/CartPageComponents.jsx/CartItem'
import TotalOrder from '../Components/AddToCart_Payment_Components/CartPageComponents.jsx/TotalOrder'
import { getCartProducts ,updateCartProduct,removeCartdata} from '../Redux/Products_Reducer/action'
const CartPage = () => {

    const dispatch = useDispatch()
    const { cart } = useSelector((store) => store.ProReducer)

    const [quantity, setQuantity] = useState(1)

    console.log("cardDataChek",cart)



    const handleDelete = (id) => {

        dispatch(removeCartdata(id)).then(() =>{
            getCartProducts();
            
        })

    }

    const handleUpdate = (id,updateData) => {
        dispatch(updateCartProduct(id,updateData)).then(() =>{
            getCartProducts();
        })
    }



const totalPrice = cart.reduce((acc,product) =>{
    return acc + product.price * product.quantity
},0)



useEffect(()=>{
   dispatch(getCartProducts()) ;
    // console.log("cardDataChek",cart)
},[])


    return (
        <Box display={'flex'} flexDirection={{ base: 'coloumn', md: 'row' }}>
            <Box
                className='product-list'
                w={{ base: '350px', md: '580px' }}
                display='flex'
                flexDirection={"column"} >
                {cart.length > 0 && cart.map((item) => {
                    return <CartItem productId={item.id} imgsrc={item.image} title={item.title} quantity={quantity} setQuentity={setQuantity} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                })}


            </Box>








            <Box className='product-chekout'>
                <Box className='Chekout'>
                    <TotalOrder totalPrice={totalPrice} />
                </Box>
            </Box>


        </Box>
    )
}

export default CartPage
