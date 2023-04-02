import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import CartAmountToggle from './CartAmountToggle';
import { addToCartPusher, getCartData } from '../../../Redux/CartReducer/action';





// ========================header================================================================


const AddToCart = ({ product }) => {
   


    const [addToCartData, setAddToCartData] = useState([])

    const { cartData } = useSelector((store) => store.cartReducer);
    const dispatch = useDispatch();








    // const [size,setsize]=useState(product.size[0])
    const [color, setColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);


    const setIncrement = () => {
        quantity < product.stock ? setQuantity(quantity + 1) : setQuantity(quantity);
    }
    const setDecrement = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }









    // push the order details in to local storage 


    const handleAddToCart = () => {
        // console.log(cartData)
        if (cartData.length > 0 && cartData.some((cartProduct) => cartProduct.productId === product.id)) {

            alert('Card already present!');

        }
        else {

            setAddToCartData(
                // console.log("product id",product.id)
                {

                    productId: product.id,
                    quantity: quantity,

                    color: color,
                    size: 'xl', // in we need to add size of the producr
                    product: product,
                }
            )
            dispatch(addToCartPusher(addToCartData)).then((res)=>{
                dispatch(getCartData());
            })
            alert("Product added successfully");
            
        }

        
    }








    useEffect(() => {
        dispatch(getCartData())
    }, [])








    // console.log(product.colors)
    return (
        <CONTAINER>
            <div className='product-colors'>
                <p>COLOURS:
                    {product.colors.map((Currcolor, index) => {
                        return <button style={{ backgroundColor: Currcolor }} className={color === Currcolor ? "btnStyle active" : "btnStyle"} onClick={() => setColor(Currcolor)} key={index} >
                            {/* {Currcolor} */}
                        </button>
                    })}
                </p>
            </div>


            <Divider />




            {/*== this section for manage Size == */}
            {/* ------------------------------------------------------------------------------- */}
            {/* <SIZE className='product-colors'>
        <p>COLOURS:
        {product.size.map((currSize,index)=>{
            return <button style={{backgroundColor:'gray'}} className={size===currSize?"sizebtnStyle active":"sizebtnStyle"} onClick={()=>setSize(Currcolor)} key={index} >
                {currSize}
            </button>
        })}
        </p>
    </SIZE> */}
            <Text >Size: xl </Text>


            <Divider />

            {/* --------------------------------------------------------------------------------------------- */}




            {/* Cart AmountToggole */}

            <div>
                <CartAmountToggle quantity={quantity} setIncrement={setIncrement} setDecrement={setDecrement} />
            </div>


            <Divider />

            {/* This is for chekout button and gift card */}
            <Box width={'100%'}
                mt={'2rem'}
                display={'flex'}
                direction={{ base: 'column', md: 'row' }}
                padding={2}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >

                <Link to='/cart'>
                    <Button w={{ base: "150px", md: "200px" }}
                        fontSize={'sm'}
                        // rounded={'full'}
                        bg={'green.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }} onClick={handleAddToCart} >CHEKOUT</Button>
                    {/* add 'size' to cart */}
                </Link>


                <Button
                    w={{ base: "150px", md: "200px" }}
                    fontSize={'sm'}
                    // rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }} >Send Gift</Button>

            </Box>



        </CONTAINER>
    )
}

export default AddToCart




const CONTAINER = styled.div`
width: 100%;
margin-top: "2rem";
display: flex;
flex-direction:column;
justify-content:center;
align-items: 'start';
.product-colors{

    margin-top: "2rem";
margin-bottom: "2rem";
}
.product-colors .btnStyle{
    border-radius: 50%;
padding:9px;
margin-left: 20px;

}
.active{
    border:2px solid gray;
}


`





