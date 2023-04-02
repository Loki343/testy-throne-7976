import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartPusher, getCartData } from '../../Redux/CartReducer/action';


export default function SingleProductBuyCardV1({ product }) {

  // console.log('product', product);
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.cartReducer)
  const [quantity, setQuantity] = useState(1)



const productData={
  productId:product.id,
  quantity:quantity,
  product:product,
}


  const handleBuy = (productData) => {

    if (cartData.some((data) => data.productId == product.id)) {
      alert("product already added in the cart")
    } else {
      dispatch(addToCartPusher(productData))

      alert('product added successfully in the cart')
    }

    dispatch(getCartData())
  }

  useEffect(() => {
    dispatch(getCartData())
  }, [])





  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={product.image}
          alt={product.title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.title}</Heading>
          <Box>
            <Text>MRP : $ {product.price_c}</Text>
            <Stack direction={'row'}>
              <Badge colorScheme={'green'}>SIZE: {product.size}</Badge>
              <Badge colorScheme={'red'}>{product.label}</Badge>
              <Badge colorScheme={'blue'}>{product.category}</Badge>
            </Stack>
            <Text>COLOUR: <Button bgColor={product.color} m='10px' rounded={'full'}></Button></Text>
          </Box>
          <Text>Deal of the day : {product.discount} %</Text>
          <Text color='blue.600' fontSize='2xl'>
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color={'gray.200'} />

      <ButtonGroup spacing='2' m={'10px auto'} display='inline-block' >

        <Button variant='solid' colorScheme='green' onClick={() => quantity < 5 && setQuantity(quantity + 1)}>
          +
        </Button>
          <Button >{quantity}</Button>

        <Button variant='solid' colorScheme='red' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</Button>


      </ButtonGroup>


      <Divider color={'gray.200'} />



      <CardFooter>
        <ButtonGroup spacing='2' m={'10px auto'} display='inline-block'>
          <Link to='/cart'>
            <Button variant='solid' colorScheme='green' onClick={() => handleBuy(productData)}>
              Buy now
            </Button>
          </Link>
          <Popover>
            <PopoverTrigger>
              <Button variant='solid' colorScheme='yellow'>Send Gift</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Attention !</PopoverHeader>
              <PopoverBody>In this time we are unavalable to provide this service.For further update we are notify you </PopoverBody>
            </PopoverContent>
          </Popover>

        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}



