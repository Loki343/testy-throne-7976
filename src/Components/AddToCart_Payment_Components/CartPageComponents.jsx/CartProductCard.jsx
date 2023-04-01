

import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Center, CloseButton, Flex, Image, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editCartData, getCartData,deleteCartData } from '../../../Redux/CartReducer/action';
import FormatPrice from '../Tinycomponents/FormatPrice';


export default function CartProductCard({ product }) {
  const dispatch = useDispatch();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [color, setColor] = useState(product.colors);
  const [quantity, setQuantity] = useState(product.quantity);



  // console.log("productArray",product);



  const setIncrement = () => {
    quantity < 7 && setQuantity(quantity + 1)
  }
  const setDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }



  // handle the edit button click
  const handleEditToggle = () => {
    setToggleEdit(!toggleEdit);
  }


  const updateData = {
    color: color,
    quantity: quantity,
    total_Price:quantity*product.product_price,
  }



  // for editing the cart data

  const handleEditSubmit = (dataObj, id) => {

    dispatch(editCartData(dataObj,id))
    .then((res) => {
      dispatch(getCartData())
    })
    setToggleEdit(!toggleEdit);
  }

//for deleting  the cart data

const handleDelete = (id) => {
  dispatch(deleteCartData(id))
  .then((res) => {
    dispatch(getCartData())
  })
 
}



  // console.log('Cart Product Card', product)

  return (
    <Center >
      <Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '550px', lg: '700px' }} height={{ sm: 'auto', md: '15rem' }} direction={{ base: 'column', md: 'row' }} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={product.image.url} />
        </Flex>
        <Stack pos={'relative'} flex={1} flexDirection="column" justifyContent="center" alignItems="start" p={1} pt={2}>

          {!toggleEdit && <Stack>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>   {product.title} </Text>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}> Price:  <FormatPrice price={product.product_price} /> </Text>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>   COLOUR:<Button ml={'20px'} p={'sm'} rounded={'full'} bgColor={product.color}></Button></Text>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>QUANTITY:  {product.quantity} </Text>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>Total Price:  <FormatPrice price={product.total_Price} />  </Text>

            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <Button onClick={handleEditToggle}>Edit</Button>
              <Button color={'red.800'} bgColor={'red.100'} onClick={()=>handleDelete(product.id)}>Delete</Button>
            </Stack>
          </Stack>}



          {toggleEdit && <Stack pos={'absolute'}
            width={'100%'}
            mt={'2rem'}
            direction={'column'}
            padding={6}
            justifyContent={'center'}
            alignItems={'start'}
            bgColor={'gray.200'}
            borderRadius={'10px'}>

            <CloseButton onClick={handleEditToggle} size='sm' />


            {/* this for quantity */}
            <Stack direction={'row'} justifyContent={'center'}
              alignItems={'start'} >
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>Quantity: </Text>
              <Button onClick={setIncrement}>+</Button>
              <Text>{quantity}</Text>
              {quantity > 1 ? <Button onClick={setDecrement}>-</Button> : <Button onClick={()=>handleDelete(product.id)}><DeleteIcon size='2xl' /></Button>}
            </Stack>

            {/* this section for color selection */}
            <Stack direction={'row'} justifyContent={'center'}
              alignItems={'start'} >
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={2}>Color: </Text>

              <COLOURBTN> {product.product_origin.colors.map((Currcolor, index) => {
                return <button style={{ backgroundColor: Currcolor }} className={color === Currcolor ? "btnStyle active" : "btnStyle"} onClick={() => setColor(Currcolor)} key={index} >

                </button>
              })}</COLOURBTN>

            </Stack>

            <Button onClick={()=>handleEditSubmit(updateData, product.id)} bgColor={'green.200'} color={'green.800'}>Done</Button>


          </Stack>}

        </Stack>
      </Stack>
    </Center>
  );
}


const COLOURBTN = styled.button`
.btnStyle{
    border-radius: 50%;
padding:9px;
margin-left: 20px;

}
.active{
    border:2px solid gray;
}

`




























