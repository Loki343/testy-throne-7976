import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Stack } from '@chakra-ui/react'
import React from 'react'

const CartItem = ({ productId,imgsrc, title, quantity, setQuantity, handleDelete, handleUpdate }) => {

const updatedData={
  quantity: quantity,

}



  return (
    <Box>
      <Box className='imageAndInfo'>
        <Box className='productImage'>
          <Image src={imgsrc} alt={title} />
        </Box>
        <Box className='productInfo'>
          <h3>{title}</h3>

          <p>Quantity:{quantity}</p>
        </Box>
        <Stack direction={'row'}>
          <Button onClick={() => quantity < 5 && setQuantity(quantity + 1)} color="green.800" bgColor={'green.200'}>
            <AddIcon />
          </Button>

          <Button onClick={() => quantity > 1 && setQuantity(quantity - 1)} color="red.800" bgColor={'red.200'}>
            
          </Button>
        </Stack>
      </Box>
      <Stack direction={'row'}>
        <Button onClick={() => handleUpdate(updatedData)} color="green.800" bgColor={'red.200'}>
          Update
        </Button>
      </Stack>
      <Button onClick={() => handleDelete(productId)} color="red.800" bgColor={'red.200'}><DeleteIcon/></Button>
    </Box>
  )
}

export default CartItem