import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import img from "../../assets/logo.jpeg";
import "./navbar.css";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="navbar">
      <Box position="relative">
        <Flex
          color={useColorModeValue("blue.600", "blue")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("blue.200", "blue.900")}
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
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to='/'>
              <Image src={img} alt="portal psico" w={"15%"} />
            </Link>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  );
}

const DesktopNav = () => {

  return (
    <div className={"contenedorlinks"}>
      <Link to="/">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#090964"}
          href={"/home"}
          _hover={{
            bg: "white",
            color: "#090964"
          }}
        >
          Inicio
        </Button>
      </Link>

      <Link to="/servicios">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#090964"}
          href={"/home"}
          _hover={{
            bg: "white",
            color: "#090964"
          }}
        >
          Servicios
        </Button>
      </Link>

      <Link to="/signin">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#090964"}
          href={"/signin"}
          _hover={{
            bg: "white",
            color: "#090964"
          }}
        >
          Ingresar
        </Button>
      </Link>

      <Link to="/signup">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#090964"}
          href={"/signup"}
          _hover={{
            bg: "white",
            color: "#090964"
          }}
        >
          Registrarse
        </Button>
      </Link>

      <Link to="/home">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#090964"}
          href={"/signup"}
          _hover={{
            bg: "white",
            color: "#090964"
          }}
        >
          Profesionales
        </Button>
      </Link>
    </div>
  );
};


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "blue.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Link to={navItem.href} key={navItem.label}>
          <MobileNavItem key={navItem.label} {...navItem} />
        </Link>
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
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("blue.600", "blue.200")}
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
          borderColor={useColorModeValue("blue.200", "blue.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Text key={child.label} py={2} href={child.href}>
                {child.label}
              </Text>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Profesionales",
    href: "/home",
  },
];