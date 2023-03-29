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

const NAV_ITEMS = [
  {
    label: "STORE",
    children: [
      {
        label: "MacBook Air",
        subLabel: "Explore our wide range of collection",
        href: "/",
      },
      {
        label: "MacBook Pro",
        subLabel: "Upgraded version of MAC Book",
        href: "/",
      },
      {
        label: "iPhone",
        subLabel: "It does before think",
        href: "/",
      },
      {
        label: "iPad",
        subLabel: "World's fastest tablet",
        href: "/",
      },
      {
        label: "Watch",
        subLabel: "Make your life healthy",
        href: "/",
      },
      {
        label: "Air Pods",
        subLabel: "Hear music with heart",
        href: "/",
      },
      {
        label: "TV & Home",
        subLabel: "Upgrade your home to the next level",
        href: "/",
      },
      {
        label: "Entertainment",
        subLabel: "Just entertain between work",
        href: "/",
      },
      {
        label: "Accessories",
        subLabel: "Go to next Era of life",
        href: "/",
      },
    ],
  },
  {
    label: "WOMEN",
    href: "/store",
  },
  {
    label: "MEN",
    href: "/store?filter=MacBook+Air&filter=MacBook+Pro",
  },
  {
    label: "CHILDREN",
    href: "/store?filter=Watch",
  },
  {
    label: "GIFTS",
    href: "/store?filter=iPad",
  },
  {
    label: "NEW",
    href: "/store?filter=iPhone",
  },

  {
    label: "COAT",
    href: "/store?filter=Airpods",
  },
  {
    label: "BAGS",
    href: "/store?filter=Tv+%26+Home",
  },
  {
    label: "OUR_STORIES",
    href: "/store?filter=Entertainment",
  }
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

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
                <Flex
                  style={{
                    fontWeight: "600",
                    fontSize: "45px",
                    fontFamily: "cursive",
                  }}
                >
                  UNICORN
                </Flex>
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
            {false ? (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/cart"}
                  color={"white"}
                >
                  <BsFillBagCheckFill />
                  <Tooltip
                    // label={`You have ${cart.length || 0} items in the cart`}
                    fontSize="md"
                    background="lightgrey"
                    color={"black"}
                  >
                    <span style={{ marginLeft: "4px" }}>
                      {/* Cart : {cart.length || 0} */}
                    </span>
                  </Tooltip>
                </Button>

                <Button className={styles.name}>
                  {localStorage.getItem("name")}
                  <span style={{ marginLeft: "5px" }}>
                    <FaUserCircle />{" "}
                  </span>
                </Button>
                <>{/* <ButtonLogout logout={logoutUser} /> */}</>
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
      border={'1px solid'}
        padding={"5px"}
        fontSize={"16px"}
        height={"25px"}
        color={"BLACK"}
        className={styles.searchInput}
      />
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
