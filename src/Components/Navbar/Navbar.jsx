import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import Navbar2 from "./Navbar2";
import ButtonLogout from "./ButtonLogout";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    label: "CATEGORIES",
    children: [
      {
        label: "Women",
        subLabel: "Explore our wide range of women's collection",
        href: "/",
      },
      {
        label: "Men",
        subLabel: "Explore our wide range of men's collection",
        href: "/",
      },
      {
        label: "Children",
        subLabel: "Thin and soft material",
        href: "/",
      },
      {
        label: "Gifts",
        subLabel: "Get gift items in low price",
        href: "/",
      },
      {
        label: "New",
        subLabel: "New items arrive weekly",
        href: "/",
      },
      {
        label: "Coat",
        subLabel: "Light weight and comfortable",
        href: "/",
      },
      {
        label: "Bags",
        subLabel: "Exclusive collections for men and women",
        href: "/",
      }
    ],
  },
  {
    label: "WOMEN",
    href: "/",
  },
  {
    label: "MEN",
    href: "/",
  },
  {
    label: "CHILDREN",
    href: "/",
  },
  {
    label: "GIFTS",
    href: "/",
  },
  {
    label: "NEW",
    href: "/",
  },

  {
    label: "COAT",
    href: "/",
  },
  {
    label: "BAGS",
    href: "/",
  }
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Navbar2 />
      <Box position={"sticky"} top={"0px"} zIndex={"1000"}>
        <Flex
          // border={"1px solid"}
          bg={"white"}
          color={useColorModeValue("gray.600", "white")}
          minH={"100px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              // variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Link to={"/"}>
                <Flex className={styles.logoname}>UNICORN</Flex>
              </Link>
            </Text>

            <Flex display={{ base: "none", md: "flex", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {localStorage.getItem("name") ? (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/cart"}
                  color={"black"}
                >
                  <BsFillBagCheckFill />
                  <Tooltip
                    label={`You have 0 items in the cart`}
                    fontSize="md"
                    background="lightgrey"
                    color={"black"}
                  >
                    <span style={{ marginLeft: "4px" }}>Cart : 0</span>
                  </Tooltip>
                </Button>

                <Button className={styles.name}>
                  <span>{localStorage.getItem("name")}</span>
                  <span style={{ marginLeft: "2px" }}>
                    <FaUserCircle />{" "}
                  </span>
                </Button>
                <>
                  <ButtonLogout
                    style={{ marginRight: "10px" }}
                    logout={() => {
                      logoutSuccess();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  />
                </>
              </>
            ) : (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/signin"}
                  color={"black"}
                >
                  Sign In
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"black"}
                  href={"/signup"}
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [query, setQuery] = useState("");
  const [suggation, setSuggation] = useState([]);

  const products = [
    {
      id: 1,
      title: "Soho Heritage Harrington Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1890.0,
      price_c: 2490.0,
      discount: 24.0,
      size: "XL",
      color: "Black",
      label: "RELAXED FIT",
      category: "Jacket",
    },
    {
      id: 2,
      title: "Logo Appliqué Lightweight Hooded Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/369E2F9B-9CD2-4000-9794-887E1BD7F277?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1350.0,
      price_c: 2490.0,
      discount: 45.78,
      size: "XXL",
      color: "Ink",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 3,
      title: "Mid-length Kensington Heritage Trench Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5479F2F2-9F2B-4909-88FE-AB243C1EFCFC?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2490.0,
      price_c: 2990.0,
      discount: 20.0,
      size: "XL",
      color: "Honey",
      label: "RELAXED FIT",
      category: "Coat",
    },
    {
      id: 4,
      title: "Short Camden Heritage Car Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/3C346B48-4969-4B83-B147-DB00C1BF44BF?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2050.0,
      price_c: 2490.0,
      discount: 21.46,
      size: "XL",
      color: "Coal Blue",
      label: "RELAXED FIT",
      category: "Coat",
    },
  ];

  useEffect(() => {
    //run some logic
    if (query === "") {
      setSuggation([]);
    } else {
      // console.log(query);
      let newSuggestions = products.filter((item) => {
        return item.title.toLowerCase().indexOf(query) !== -1 ? true : false;
      });
      setSuggation(newSuggestions);
    }
  }, [query]);

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <p
                  className={styles.label}
                  style={{ color: "black", fontWeight: "550" }}
                >
                  {navItem.label}
                </p>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                bgColor={"black"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        border={"1px solid"}
        padding={"5px"}
        fontSize={"16px"}
        height={"25px"}
        color={"BLACK"}
        className={styles.searchInput}
      />
      {query.length > 0 && (
        <div
          className={styles.searchLogo}
          style={{ marginTop: "4px", color: "white" }}
        >
          <span style={{ cursor: "pointer" }}>
            <RxCross1
              color="black"
              onClick={() => {
                setQuery("");
              }}
              cursor={"pointor"}
            />
          </span>
        </div>
      )}
      {suggation.length > 0 && (
        <Box
          border={"1px solid"}
          maxH={"200px"}
          position={"absolute"}
          w={"30%"}
          left={"55.9%"}
          top={"64px"}
          zIndex={"10"}
          bg={"black"}
          borderRadius={"5px"}
          overflow={"hidden scroll"}
        >
          {suggation.map((item) => {
            return (
              <Link
                onClick={() => {
                  setQuery("");
                }}
                // to={`/product/${item.id}`}
              >
                <Text color={"whiteAlpha.700"} cursor={"pointer"}>
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"whiteAlpha.600"}
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"whiteAlpha.700"}
            _groupHover={{ color: "white" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
