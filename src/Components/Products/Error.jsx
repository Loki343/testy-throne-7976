// import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
 
  Stack,
 
 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>


      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Oh! 404 Not Found! <br />
            <Text as={'span'} color={'blue.400'}>
              Something wrong with this link
            </Text>
          </Heading>
      <Link to='/' color={'red.800'}>go to the home page</Link>
        </Stack>

      </Container>
      
    </>
  );
}


 