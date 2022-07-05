import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const leftRef = useRef();
  const rightRef = useRef();

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <>
    
      <Flex
        h="100px"
        backgroundColor="#202124"
        w="100%"
        position="fixed"
        boxShadow="0px 0.5px 17px 3px #000000"
        zIndex="100"
      >
        {opened && (
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
                  color="white"
                  fontSize="25px"
                  onClick={() => {
                    Router.push("/");
                  }}
                >
                  PORTFOLIO
                </Button>
                <Button
                  variant="link"
                  color="white"
                  fontSize="25px"
                  onClick={() => {
                    Router.push("/sluzby");
                  }}
                >
                  SLUŽBY
                </Button>
                <Button
                  variant="link"
                  color="white"
                  fontSize="25px"
                  onClick={() => {
                    Router.push("/postprodukce");
                  }}
                >
                  POSTPRODUKCE
                </Button>
                <Button
                  variant="link"
                  color="white"
                  fontSize="25px"
                  onClick={() => {
                    Router.push("/kontakt");
                  }}
                >
                  KONTAKT
                </Button>
              </VStack>
            </VStack>
          </Flex>
        )}

        <HStack
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          px="20px"
        >
          <Image
            src="/images/logoHDweb.png"
            width="100%"
            maxWidth="220px"
            height="auto"
            cursor="pointer"
            onClick={() => {
              Router.push("/");
            }}
            mt="13px"
          />
          <Flex
            display={["flex", "flex", "none", "none"]}
            cursor="pointer"
            onClick={handleClick}
          >
            <HiOutlineMenuAlt3 color="white" size="40px" />
          </Flex>
          <HStack
            align="center"
            gap="30px"
            pr="20px"
            display={["none", "none", "flex", "flex"]}
          >
            <Button
              color="white"
              variant="link"
              fontSize="17px"
              onClick={() => {
                Router.push("/");
              }}
            >
              PORTFOLIO
            </Button>
            <Button
              color="white"
              variant="link"
              fontSize="17px"
              onClick={() => {
                Router.push("/sluzby");
              }}
            >
              SLUŽBY
            </Button>
            <Button
              color="white"
              variant="link"
              fontSize="17px"
              onClick={() => {
                Router.push("/postprodukce");
              }}
            >
              POSTPRODUKCE
            </Button>
            <Button
              color="white"
              variant="link"
              fontSize="17px"
              onClick={() => {
                Router.push("/kontakt");
              }}
            >
              KONTAKT
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </>
  );
}
