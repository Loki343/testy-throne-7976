import { Box, Button } from '@chakra-ui/react'
import React from 'react'



const CartAmountToggle = ({ quantity, setIncrement, setDecrement }) => {
  return (

    <Box className="amount-toggle-Button" >
      <Button sx={{ color: "red.800", bgColor: "red.100", fontSize: '30px' }} onClick={() => setDecrement(quantity)}  >-</Button>
      <span style={{ color: 'blue', padding: "10px" }}>{quantity}</span>
      <Button sx={{ color: "green.800", bgColor: "green.100", fontSize: '30px' }} onClick={() => setIncrement(quantity)}  >+</Button>
      
    </Box>

  )
}

export default CartAmountToggle

