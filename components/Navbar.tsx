/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavbarMenu } from "./NavbarMenu";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const leftRef = useRef();
  const rightRef = useRef();
  const router = useRouter();

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <>
      <Flex
        h={["80px", "80px", "100px", "100px"]}
        w="100%"
        position="fixed"
        boxShadow="0px 0.5px 17px 3px #000000"
        zIndex="100"
      >
        {opened && <NavbarMenu opened={opened} />}
        {/* {opened && (
          <Flex
            w="100%"
            h="100vh"
            position="absolute"
            background="blackAlpha.500"
            zIndex="120"
            display={["flex", "flex", "none", "none"]}
            onClick={(e) => {
              if (e.target === rightRef.current) {
                setOpened(!opened);
              }
            }}
            ref={rightRef}
          >
            <VStack
              w="65%"
              data-aos="fade-right"
              h="100%"
              background="#282828"
              ref={leftRef}
            >
              <Flex w="100%" justify="flex-end" p="20px">
                <IoMdClose
                  color="white"
                  size="40px"
                  onClick={handleClick}
                  cursor="pointer"
                />
              </Flex>

              <VStack w="100%" gap="20px">
                <Button
                  variant="link"
                  color={router.route === "/" ? "#2792c2" : "white"}
                  fontSize={["20px", "20px", "25px", "25px"]}
                  fontWeight="bold"
                  onClick={() => {
                    Router.push("/");
                  }}
                >
                  PORTFOLIO
                </Button>
                <Button
                  variant="link"
                  color={router.route === "/sluzby" ? "#2792c2" : "white"}
                  fontSize={["20px", "20px", "25px", "25px"]}
                  fontWeight="bold"
                  onClick={() => {
                    Router.push("/sluzby");
                  }}
                >
                  SLUŽBY
                </Button>
                <Button
                  variant="link"
                  color={router.route === "/postprodukce" ? "#2792c2" : "white"}
                  fontSize={["20px", "20px", "25px", "25px"]}
                  fontWeight="bold"
                  onClick={() => {
                    Router.push("/postprodukce");
                  }}
                >
                  POSTPRODUKCE
                </Button>
                <Button
                  variant="link"
                  color={router.route === "/kontakt" ? "#2792c2" : "white"}
                  fontSize={["20px", "20px", "25px", "25px"]}
                  fontWeight="bold"
                  onClick={() => {
                    Router.push("/kontakt");
                  }}
                >
                  KONTAKT
                </Button>
                <Flex gap="20px">
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
                </Flex>
              </VStack>
            </VStack>
          </Flex>
        )} */}

        <HStack
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          pr="20px"
          position="absolute"
          zIndex="30"
          backgroundColor="#202124"
        >
          <Image
            src="/images/logo.png"
            width="100%"
            maxWidth="120px"
            ml="20px"
            height="auto"
            cursor="pointer"
            onClick={() => {
              Router.push("/");
            }}
          />
          <Flex
            display={["flex", "flex", "none", "none"]}
            cursor="pointer"
            onClick={handleClick}
          >
            <HiOutlineMenuAlt3 color="white" size="40px" />
          </Flex>
          <HStack align="center" display={["none", "none", "flex", "flex"]}>
            <Button
              color={router.route === "/" ? "#2792c2" : "white"}
              variant="ghost"
              _focus={{
                boxShadow: "none",
              }}
              fontSize="17px"
              onClick={() => {
                Router.push("/");
              }}
            >
              PORTFOLIO
            </Button>
            <Button
              color={router.route === "/sluzby" ? "#2792c2" : "white"}
              variant="ghost"
              _focus={{
                boxShadow: "none",
              }}
              fontSize="17px"
              onClick={() => {
                Router.push("/sluzby");
              }}
            >
              SLUŽBY
            </Button>
            <Button
              color={router.route === "/postprodukce" ? "#2792c2" : "white"}
              variant="ghost"
              _focus={{
                boxShadow: "none",
              }}
              fontSize="17px"
              onClick={() => {
                Router.push("/postprodukce");
              }}
            >
              POSTPRODUKCE
            </Button>
            <Button
              color={router.route === "/kontakt" ? "#2792c2" : "white"}
              variant="ghost"
              _focus={{
                boxShadow: "none",
              }}
              fontSize="17px"
              onClick={() => {
                Router.push("/kontakt");
              }}
            >
              KONTAKT
            </Button>
            {/* <Flex gap="20px">
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
          </HStack>
        </HStack>
      </Flex>
    </>
  );
}
