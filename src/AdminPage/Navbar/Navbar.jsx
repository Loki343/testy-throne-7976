import React from "react";
import "./Navbar.css";
import { Box, Button, Center, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
// import RightSection from "../RightSection/RightSection";
import UNICORN from "../../Assets/unicorn.png";
// import RightSection from "./Right_Section";
export default function AdminNavbar() {
  return (
    <div className="Navbar-Container">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          paddingBottom: "20px",
          marginTop: "15px",
          marginLeft: "9%",
        }}
      >
        <Center>
          <Box>
            <Image
              mt="10"
              mb="6"
              // height={"100px"}
              width="200px"
              borderRadius="5"
              boxSize="170px"
              src={UNICORN}
              alt="LOGO"
            />
          </Box>
        </Center>
        <Box>
          <Link to={"/admin-dashboard"}>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginTop: "30px",
                marginBottom: "30px",
                height: "30px",
                width: "150px",
                height: "40px",
              }}
            >
              Dashboard
            </Button>
          </Link>
          <br />
          <Link to={"/admin-user"}>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginBottom: "30px",
                height: "30px",
                width: "150px",
                height: "40px",
              }}
            >
              User
            </Button>
          </Link>
          <br />

          <Link to={"/admin-menproducts"}>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginBottom: "30px",
                height: "30px",
                width: "150px",
                height: "40px",
              }}
            >
              Men Product
            </Button>
          </Link>
          <br />
          <Link to={"/admin-womenproducts"}>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginBottom: "30px",
                height: "30px",
                width: "150px",
                height: "40px",
              }}
            >
              Women Product
            </Button>
          </Link>
          <br />
          <Link to={"/admin-order"}>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginBottom: "30px",
                height: "40px",
                width: "150px",
              }}
            >
              Order
            </Button>
          </Link>
          <Link to='/signinadmin'>
            <Button
              style={{
                marginLeft: "27px",
                fontWeight: "bolder",
                backgroundColor: "black",
                color: "white",
                marginBottom: "30px",
                height: "40px",
                width: "150px",
              }}
              onClick={localStorage.clear()}
            >
              Logout
            </Button>
          </Link>
          <br />
        </Box>
      </div>
      {/* <div>
        <RightSection />
      </div> */}
    </div>
  );
}
