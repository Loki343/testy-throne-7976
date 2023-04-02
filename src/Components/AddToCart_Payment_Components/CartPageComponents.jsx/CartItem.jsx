import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Spacer,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

 export  const CartItem = ({ product, quantity, onRemove, onUpdate }) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setNewQuantity(value);
    onUpdate(product.id, value);
  };

  return (
    <Flex alignItems="center" p={2}>
      <Box display={'flex'} flexDirection='row-reverse' m="10px">
        <Text fontSize="md" m="10px">{product.title}</Text>
        <Text fontSize="sm" color="gray.500">
          <Image w={'50px'} h='60px' src={product.image} alt={product.title} />
        </Text>
      </Box>
      <Box>
        <input
          type="number"
          min="1"
          value={newQuantity}
          onChange={handleQuantityChange}
          style={{ width: "50px" }}
        />
      </Box>
      <Spacer />
      <Box textAlign="right" ml={4}>
        <Text fontSize="lg" fontWeight="bold">
          ${product.price * quantity}
        </Text>
        <IconButton
          variant="ghost"
          size="sm"
          icon={<MdDelete />}
          onClick={() => onRemove(product.id)}
          ml={2}
        />
      </Box>
    </Flex>
  );
};







const ShoppingCart = ({ items, onRemove, onUpdate }) => {

console.log("itemsonItemPage", items)

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  // console.log("total", total)
  return ( 
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Shopping Cart
      </Heading>
      {items.map((item) => (
        <CartItem
          key={item.product.id}
          product={item.product}
          quantity={item.quantity}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
      <Flex alignItems="center" p={2}>
      
        <Spacer />
        <Box textAlign="right" ml={4}>
          <Text fontSize="lg" fontWeight="bold" mr={2}>
            Total:
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            ${total}
          </Text>
        </Box>
      </Flex>
      <Button colorScheme="blue" size="lg" w="100%" mt={4}>
        Checkout
      </Button>
    </Box>
  );
};

export default ShoppingCart;