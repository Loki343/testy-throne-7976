import React from "react";
import "../Style/Navbar.css"
import { Box, Button, Center, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
// import RightSection from "../RightSection/RightSection";
import UNICORN from "../../Assets/unicorn.png"
import RightSection from "./Right_Section";
export default function Navbar() {
  return (
    <div className="Navbar-Container">
      <div style={{marginTop:"20px", marginRight:"10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", paddingBottom:"20px"}}>
        <Center>
          <Box>
            <Image
              mt="10"
              mb="6"
              // height={"100px"}
              width="200px"
              borderRadius="5"
              boxSize="170px"
              src= {UNICORN}
              alt="LOGO"
            />
          </Box>
        </Center>
        <Box>
          <Link to={"/dashboard"}>
            <Button style={{fontWeight:"bolder",backgroundColor:"black", color:"white", marginTop:"30px",marginBottom:"30px",height:"30px", width:"150px", height:"40px" }}>Dashboard</Button>
          </Link>
          <br />
          <Link to={"/User-Profile"}>
            <Button style={{fontWeight:"bolder",backgroundColor:"black", color:"white", marginBottom:"30px",height:"30px", width:"150px", height:"40px" }}>User</Button>
          </Link>
          <br />

          <Link to={"/products"}>
            <Button style={{fontWeight:"bolder",backgroundColor:"black", color:"white", marginBottom:"30px",height:"30px", width:"150px", height:"40px" }}>Men Product</Button>
          </Link>
          <br />
          <Link to={"/women-products"}>
            <Button style={{fontWeight:"bolder",backgroundColor:"black", color:"white", marginBottom:"30px",height:"30px", width:"150px", height:"40px" }}>Women Product</Button>
          </Link>
          <br />
          <Link to={"/Admit-order"}>
            <Button style={{fontWeight:"bolder",backgroundColor:"black", color:"white", margin:"5px",height:"40px", width:"150px"  }}>Order</Button>
          </Link>
          <br />
        </Box>
      </div>
      <div>
        <RightSection />
      </div>
    </div>
  );
}
