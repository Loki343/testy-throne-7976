
import React, { useState } from "react";
import {  Td, Tr, Image, Box, Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import axios from 'axios';
 import {ChevronDownIcon} from "@chakra-ui/icons";

const WomenProductRow =({image, name, title, price ,id, category})=> {
const toast=useToast();
 
  const handleDelete = () => {

    try {
      axios.delete(`https://deployed-server-byloki.onrender.com/women/${id}`);
     toast({
      title: 'Product Delete',
      description: "Product has been deleted ",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    } catch (error) {
      console.error(error);
    }
  };

   
  return (
    <>
      <Tr color={"gray.600"}>
        <Td>
          <Box w="14">

          <Image src={image} alt={name}/>
          </Box>
        </Td>
        <Td>{category}</Td>
        <Td>{price}</Td>
        {/* <Td>{`₹ ${price.slice(2, price.length)}`}</Td> */}
        <Td>{title}</Td>
        <Td ><Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem color={"white"} _hover={{bg:'#5D68A1'}}>Edit Product</MenuItem>
    <MenuItem color={"white"} _hover={{bg:'#5D68A1'}} onClick={handleDelete} >Delete Product</MenuItem>
    
  </MenuList>
</Menu></Td>
      </Tr>
    </>
  );
}

export default WomenProductRow;