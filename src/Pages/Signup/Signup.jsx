import React, { useState } from "react";
import styles from "./Signup.module.css";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addUserData } from "./../../Redux/AuthReducer/action";

const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  gender: "",
  profile:
    "https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg",
};

function Signup() {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toast = useToast();

  const signupSuccess = () => {
    toast({
      title: "Signup Successful.",
      description: "Thank You!!Login Now",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = () => {
    toast({
      title: "Email Already Exist.",
      description: "Please Enter New Email.",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const fillRequiredData = () => {
    toast({
      title: "Please fill required data",
      description: "Please Share required info",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postdata = async (e) => {
    e.preventDefault();
    setUserData(initialState);
    // const payload = {...userData,price: Number(userData.price)}
    try {
      let res = await fetch("http://localhost:8080/user");
      let data = await res.json();
      console.log(data);
      var mailAuth = false;
      for (let i in data) {
        if (data[i].email === userData.email) {
          mailAuth = true;
          break;
        }
      }

      if (mailAuth === true) {
        emailExist();
        return;
      }
    } catch (error) {
      console.log(error);
    }

    if (
      !mailAuth &&
      userData.name &&
      userData.email &&
      userData.password &&
      userData.gender &&
      userData.mobile
    ) {
      dispatch(addUserData(userData, signupSuccess, navigate, emailExist));
    }else{
      fillRequiredData()
    }
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading textAlign="center" color="black">
          Sign up
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Your user Name (6 characters only & Required*)"
            value={userData.name}
            maxLength={6}
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
          />
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select Your Gender (*Required)"
            value={userData.gender}
            onChange={(e) => handleChange(e)}
            name="gender"
          >
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </Select>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="Your Phone Number (*Required)"
            type="number"
            value={userData.mobile}
            onChange={(e) => handleChange(e)}
            name="mobile"
          />
          <FormLabel>Email address</FormLabel>
          <Input
            value={userData.email}
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Your Email Address (*Required)"
            name="email"
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Your Password (*Required)"
            value={userData.password}
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
          />
          <FormLabel>Re-Enter Password</FormLabel>
          <Input
            placeholder="Re-Enter Your Password (*Required)"
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={userData.password}
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have an account click{" "}
            <Link color="black" fontWeight={"600"} href="/signin">
              Sign in
            </Link>
          </FormHelperText>
          {/* {load ? (
            <Button
              isLoading
              w="10%"
              marginLeft="42%"
              marginTop="30px"
              color="white"
              background="rgb(45,45,47)"
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
          ) : ( */}
          <Button
            onClick={postdata}
            loadingText="Submitting"
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="black"
            _hover={{
              bg: "gray",
            }}
          >
            <span className={styles.signupButton}>Sign up</span>
          </Button>
          {/* )} */}
        </FormControl>
      </div>
    </div>
  );
}

export default Signup;
