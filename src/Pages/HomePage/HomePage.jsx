import { Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousels";
import { Carousels2 } from "./Carousels2/Carousels2";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <div className={styles.imageContain}>
        <div style={{ width: "50%" }}>
          <Image
            src="https://assets.burberry.com/is/image/Burberryltd/0516D493-ACB4-456A-A524-6B777EB75AA3?wid=1024"
            alt="boy"
            width={"100%"}
          />{" "}
          <p>
            <Link to="/men">Look at our MEN collection</Link>
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <Image
            src="https://assets.burberry.com/is/image/Burberryltd/DD888F01-B990-473B-BA13-48BB86124CBF?wid=1024"
            alt="girl"
            width={"100%"}
          />
          <p>
            <Link to="/men">Look at our WOMEN collection</Link>
          </p>
        </div>
      </div>
      
      
      <div className={styles.imageContain}>
        <div style={{ width: "50%" }}>
          <Image
            src="https://assets.burberry.com/is/image/Burberryltd/A9ED9A9F-011B-423B-898C-9DFA48957BBD?wid=1024"
            alt="boy"
            width={"100%"}
          />{" "}
          <p>
            <Link to="/men">Exclusive new bags for WOMEN</Link>
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <Image
            src="https://assets.burberry.com/is/image/Burberryltd/E4D81A2B-CC43-41E8-A173-EE09A42D64D1?wid=1024"
            alt="girl"
            width={"100%"}
          />
          <p>
            <Link to="/men">Exclusive new bags for MEN</Link>
          </p>
        </div>
      </div>
      <p className={styles.categoryHeading}>Explore our special categories</p>
      <Carousels2 />
      <img
        src="https://assets.burberry.com/is/image/Burberryltd/24B3B2B8-12B6-4DEA-9174-2650E15976F2?wid=1920"
        alt=""
      />
      <p className={styles.heritage}>
        <Link to="/">These all are our exclusive HERITAGE collection</Link>
      </p>
      
    </div>
  );
};

export default HomePage;
