import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";
import { useToast } from "@chakra-ui/react";

function Signin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  // console.log('auth',isAuth)
  // all toasts are here
  const wrongEmail = () => {
    toast({
      title: "Wrong Email or Password.",
      description: "Please enter right email or password!!!",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const loginSuccess = () => {
    toast({
      title: "Login Successful.",
      description: "Thank You For Login!!!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  // all toasts are here

  const submitLogin = async () => {
    try {
      let res = await fetch(`http://localhost:8080/user`);
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem("name", data[i].name);
          break;
        }
      }

      if (Auth === false) {
        wrongEmail();
      } else {
        loginSuccess();
        navigate("/");
      }

    } catch (error) {
      console.log(error);
    }
    setemail("");
    setPassword("");
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading color="black" textAlign="center">
          Sign in
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />

          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            type="password"
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{" "}
            <Link color="black" href="/signup" fontWeight={"600"}>
              Signup
            </Link>
          </FormHelperText>
          <FormHelperText>
            Go to admin panel{" "}
            <Link color="black" fontWeight={"600"} href="/signinadmin">
              Signin
            </Link>
          </FormHelperText>
          <Button
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="black"
            onClick={submitLogin}
            _hover={{
              bg: "rgb(4,4,4)",
            }}
          >
            <span className={styles.loginButton}>Sign in</span>
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Signin;
