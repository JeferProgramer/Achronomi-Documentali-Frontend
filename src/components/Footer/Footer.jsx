import React from "react";
import img from "../../assets/logo.jpeg";
import {
  Box,
  chakra,
  Container,
  Link,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"black"}
      bottom="0"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whi#090964pha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <div className="container-footer">
      <Box
        position="relative"
        left={0}
        bottom={0}
        width="100%"
        bg={"#090964"}
        color={"white"}
        zIndex="3"
      >
        <Container
          as={Stack}
          maxW={"100%"}
          height={"4rem"}
          pb={1}
          pt={1}
          pl={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >

          <Text>© 2022 Achrono Documental. All rights reserved</Text>

          <Stack direction={"row"} spacing={6}>
            <Link href="https://twitter.com" isExternal>
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
            </Link>

            <Link
              href="https://www.youtube.com"
              isExternal
            >
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
            </Link>

            <Link href="https://www.instagram.com" isExternal>
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </Link>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}