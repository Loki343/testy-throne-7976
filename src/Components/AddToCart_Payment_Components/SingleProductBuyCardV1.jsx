import {
  Badge,

  Center,
  Flex,
  Heading,
  
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import SinProductImg from './SinProductImg';
import AddToCart from './Tinycomponents/AddToCart';
import FormatPrice from './Tinycomponents/FormatPrice';

export default function SingleProductBuyCardV1({ product }) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w='100%'
        height={{ sm: '476px', md: 'auto' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'sm'}
        padding={7}>
        <Flex flex={1} bg="blue.200">

          <SinProductImg image={product.image} />

        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          p={6}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {product.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {product.company}
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            MRP:
            <del>
              <FormatPrice price={+product.price } />
            </del>
            {/* for brand */}
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge  px={2}  py={1}  bg={useColorModeValue('gray.50', 'gray.800')}  fontWeight={'400'}>
             Catagory:Jacket
            </Badge>
            <Badge   px={2}   py={1}   bg={useColorModeValue('gray.50', 'gray.800')}   fontWeight={'400'}>   Label:relaxfit
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>




          {product.stock > 0 && <AddToCart product={product} />}



          <Stack>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Product Name:{product.name} -
              {product.description}
              
            </Text>
          </Stack>

        </Stack>




      </Stack>


    </Center>
  );
}



