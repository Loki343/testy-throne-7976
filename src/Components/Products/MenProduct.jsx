import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export const MenProduct=({image ,title , id, discount ,brand,price , price_c})=> {
    return (
      <Center >
        <Box
          role={'group'}
          p={0}
          maxW={'330px'}
          w={'full'}
          bg={'#f6f6f6'}
          mb={"20px"}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={0}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              height={230}
              width={"100%"}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={5} align={'center'}>
            <Heading color={'gray.500'} fontSize={'xl'} textTransform={'uppercase'}>
              Brand: {brand}
            </Heading>
            <Text fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              Title: {title}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={400} fontSize={'xl'}>
              Price: ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                ${price_c}
              </Text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={500} fontSize={'xl'}>
              Discount: {discount}%
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }