import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const CartItem = ({
  productId,
  imgsrc,
  title,
  quantity,
  setQuantity,
  handleDelete,
  handleUpdate,
}) => {
  const updatedData = {
    quantity: quantity,
  };

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Prod ID</Th>
              <Th>into</Th>
              <Th >multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{productId}</Td>
              <Td>millimetres (mm)</Td>
              <Td >25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartItem;
