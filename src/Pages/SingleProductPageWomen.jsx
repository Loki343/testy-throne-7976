import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Products_Reducer/action";

export default function SingleProductPageWomen({ image,
  title,
  discount,
  label,
  price,
  price_c,}) {
  const [data, setData] = useState({});
  const { id } = useParams();
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
    const prod = { image, title, id, discount, label, price, price_c ,quantity:1};
    if (localStorage.getItem("name")) {
      dispatch(addToCart(prod, addToCartSuccess, alreadyAdded));
      window.location.reload()
    } else {
      LoginFirst();
    }
  };

  const getDetails = async () => {
    let res = await axios.get(
      `https://deployed-server-byloki.onrender.com/women/${id}`
    );
    return res.data;
  };
  console.log(data);
  useEffect(() => {
    getDetails().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.image}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "600px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.title}
            </Heading>
            <Flex mt={"30px"}>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${data.price} USD
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                textDecoration={"line-through"}
                ml={"20px"}
              >
                ${data.price_c} USD
              </Text>
            </Flex>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                This is our{" "}
                <span
                  style={{ fontFamily: "cursive", color: "rgb(214,163,80)" }}
                >
                  UNICORN
                </span>{" "}
                special product and it is made by popular fashion designers.We
                are perfect about fitting and size.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Label:
                  </Text>{" "}
                  {data.label}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category:
                  </Text>{" "}
                  {data.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Material:
                  </Text>{" "}
                  Cotton Fiber
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Size:
                  </Text>{" "}
                  {data.size}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Product color:
                  </Text>{" "}
                  {data.color}
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Discount:
                  </Text>
                  {data.discount} %
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
