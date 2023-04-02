import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/AddToCart_Payment_Components/CartPageComponents.jsx/CartItem";
import TotalOrder from "../Components/AddToCart_Payment_Components/CartPageComponents.jsx/TotalOrder";
import {
  getCartProducts,
  updateCartProduct,
  removeCartdata,
} from "../Redux/Products_Reducer/action";
import { MdDelete } from "react-icons/md";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.ProReducer);

  const [quantity, setQuantity] = useState(1);

  console.log("cardDataChek", cart);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then(() => {
      dispatch(getCartProducts());
    });
  };

  //   const handleUpdate = (id, updateData) => {
  //     dispatch(updateCartProduct(id, updateData)).then(() => {
  //       getCartProducts();
  //     });
  //   };

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  useEffect(() => {
    dispatch(getCartProducts());
    // console.log("cardDataChek",cart)
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "coloumn", md: "row" }}
      flexWrap={"wrap"}
      width={"full"}
      justifyContent={"space-between"}
      padding={"20px"}
    >
      <Box
        className="product-list"
        w={{ base: "350px", md: "580px", lg: "1070px" }}
        display="flex"
        flexDirection={"column"}
      >
        {cart.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Grand Total Price : {totalPrice || 0}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Prod ID</Th>
                  <Th>Image</Th>
                  <Th>Title</Th>
                  <Th>Price</Th>
                  <Th>Quan.</Th>
                  <Th>Total</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              {cart.length > 0 &&
                cart.map((item) => {
                  return (
                    <Tbody>
                      <Tr>
                        <Td>{item.id}</Td>
                        <Td>
                          <img
                            src={item.image}
                            width={"50px"}
                            style={{ height: "60px" }}
                            alt="imag"
                          />
                        </Td>
                        <Td>{item.title}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{Number(item.quantity) * Number(item.price)}</Td>
                        <Td>
                          <DeleteIcon
                            onClick={() => handleDelete(item.id)}
                            fontSize="lg"
                          />
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
            </Table>
          </TableContainer>
        ) : (
          <>
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>
              Please Add Items to your Cart
            </h1>
            <h1 style={{ textAlign: "center", fontSize: "50px",color:'red',fontWeight:'700' }}>
              Go to Home Page to <span style={{color:'rgb(66,153,225)'}}><Link to='/'>continue shoping</Link></span> 
            </h1>
            {/* <Link to='/' style={{ textAlign: "center", fontSize: "20px" }}>
              HomePage
            </Link> */}
          </>
        )}
      </Box>

      <Box className="product-chekout">
        <Box className="Chekout">
          <TotalOrder totalPrice={totalPrice} />
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
