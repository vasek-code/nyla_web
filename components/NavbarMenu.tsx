/* eslint-disable @next/next/link-passhref */
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export const NavbarMenu: React.FC<{
  opened: boolean;
}> = ({ opened }) => {
  const router = useRouter();

  return (
    <>
      <Flex
        w="100%"
        position="absolute"
        background="#202124"
        animation={opened ? "slidedown 0.3s 1" : "slideup 0.3s 1"}
        style={{
          animationFillMode: "forwards",
        }}
        zIndex="20"
        boxShadow="0px 0.5px 17px 3px #000000"
        display={["flex", "flex", "none", "none"]}
        justify="flex-start"
      >
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justify="flex-start"
          gap="15px"
          p="15px"
        >
          <Link href="/">
            <Button
              fontSize="1.2rem"
              fontWeight="600"
              color={router.route === "/" ? "#2792c2" : "white"}
            >
              Portfolio
            </Button>
          </Link>
          <Link href="/sluzby">
            <Button
              fontSize="1.2rem"
              fontWeight="600"
              color={router.route === "/sluzby" ? "#2792c2" : "white"}
            >
              Služby
            </Button>
          </Link>
          <Link href="/postprodukce">
            <Button
              fontSize="1.2rem"
              fontWeight="600"
              color={router.route === "/postprodukce" ? "#2792c2" : "white"}
            >
              Postprodukce
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button
              fontSize="1.2rem"
              fontWeight="600"
              color={router.route === "/kontakt" ? "#2792c2" : "white"}
            >
              Kontakt
            </Button>
          </Link>
          {/* <Flex gap="20px" w="100%" justify="flex-start">
            <a
              href="https://www.instagram.com/nylacreativeagency"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<BsInstagram size="22px" />}
                aria-label="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/nylacreativeagency"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<BsFacebook size="22px" />}
                aria-label="facebook"
              />
            </a>
          </Flex> */}
        </Flex>
      </Flex>
    </>
  );
};
