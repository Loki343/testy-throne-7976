import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({product}) => {


// const [size,setsize]=useState(product.size[0])
const [color,setColor]=useState(product.colors[0]);
const [quantity,setQuantity]=useState(1);


const setIncrement = () => {
    quantity<product.stock?setQuantity(quantity+1):setQuantity(quantity);
}
const setDecrement = () => {
    quantity>1?setQuantity(quantity-1):setQuantity(1);
}

// push the order details in to local storage 
const addToCartPusher= ()=> {}


    // console.log(product.colors)
  return (
    <div>
    <COLOR className='product-colors'>
        <p>COLOURS:
        {product.colors.map((Currcolor,index)=>{
            return <button style={{backgroundColor:Currcolor}} className={color===Currcolor?"btnStyle active":"btnStyle"} onClick={()=>setColor(Currcolor)} key={index} >
                {/* {Currcolor} */}
            </button>
        })}
        </p>
    </COLOR>




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

{/* --------------------------------------------------------------------------------------------- */}




{/* Cart AmountToggole */}

<div>
    <CartAmountToggle  quantity={quantity} setIncrement={setIncrement} setDecrement={setDecrement}  />
</div>



    {/* This is for chekout button and gift card */}
    <Box>
      
        <NavLink to='/cart'>
          <Button sx={{ color: "blue.800", bgColor: "blue.100", fontSize: '30px' }} 
          onClick={()=>addToCartPusher(product.id,color,quantity)} >CHEKOUT</Button>
          {/* add 'size' to cart */}
        </NavLink>


        <Button sx={{ color: "pink.800", bgColor: "gray.100", fontSize: '30px' }} >Send Gift</Button>

      </Box>
    
    </div>
  )
}

export default AddToCart






const COLOR=styled.div`
.btnStyle{
    border-radius: 50%;
padding:9px;
margin-left: 20px;
}
.active{
    border:2px solid gray;
}


`