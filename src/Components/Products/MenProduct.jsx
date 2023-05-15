import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  useToast
} from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";
import { addToCart } from "../../Redux/Products_Reducer/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const MenProduct = ({
  image,
  title,
  id,
  discount,
  label,
  price,
  price_c,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const addToCartSuccess = () => {
    toast({
      title: "Added Successful.",
      description: "Your product is added",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  const alreadyAdded = () => {
    toast({
      title: "Already Added in Cart",
      description: "Your product is already added",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  const LoginFirst = () => {
    toast({
      title: "Please login",
      description: "Login to add Product",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  const handleAddToCart = () => {
    const prod = { image, title, id, discount, label, price, price_c,quantity:1 };
    if(localStorage.getItem('name')){
      dispatch(addToCart(prod, addToCartSuccess, alreadyAdded));
      window.location.reload()
    }else{
      LoginFirst()
    }
    
  };
  return (
    <Center>
      <Box
        role={"group"}
        p={0}
        pb={"10px"}
        maxW={"330px"}
        w={"full"}
        bg={"#f6f6f6"}
        mb={"10px"}
        pos={"relative"}
        lineHeight="5"
      >
        <Box
          rounded={"lg"}
          mt={0}
          pos={"relative"}
          height={"320px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Link to={`/men-product/${id}`}>
            <Image
              height={"100%"}
              width={"100%"}
              cursor={"pointer"}
              src={image}
            />
          </Link>
        </Box>
        <Stack pt={5} align={"center"}>
          {/* <Heading color={'gray.500'} fontSize={'xl'} textTransform={'uppercase'}>
              {brand}
            </Heading> */}
          <Text
            fontSize={"medium"}
            padding={"0 15px"}
            textAlign={"center"}
            fontFamily={"body"}
            fontWeight={500}
            width={"200px"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
          >
            {title}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={400} fontSize={"xl"}>
              ${price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ${price_c}
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={500} fontSize={"medium"}>
              {discount}%
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text
              fontWeight={400}
              fontSize={"small"}
              textTransform={"uppercase"}
            >
              {label}
            </Text>
          </Stack>
          <Button
            background={"black"}
            color={"white"}
            onClick={handleAddToCart}
            _hover={{}}
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
