import { Heading, VStack, Image, Flex, Text } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Background from "../../components/Background";

export default function Sluzby() {
  useEffect(() => {}, []);

  return (
    <>
      <Flex
        w="100%"
        minH="100vh"
        pt="150px"
        gap="100px"
        pb="60px"
        position="absolute"
        zIndex="2"
      >
        <VStack gap="30px" px="30px" w="100%">
          <VStack
            gap="20px"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <Heading color="white">Naše služby</Heading>
            <Flex
              backgroundImage={"url(images/writing.jpg)"}
              backgroundSize="cover"
              h="600px"
              w="70vw"
            >
              <VStack
                background="blackAlpha.800"
                py="10px"
                justify="center"
                w="50%"
              >
                <Text color="white" fontSize="2xl" pb="10px">
                  Copywriting
                </Text>
                <Text color="white" px="30px" textAlign="center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore et, dolor culpa consequatur ipsam laudantium aut saepe
                  ad quis modi a, nisi aliquam suscipit nesciunt harum magnam
                  accusamus? Mollitia, voluptas.
                </Text>
              </VStack>
            </Flex>
          </VStack>
          <VStack
            gap="20px"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <Heading color="white">Naše služby</Heading>
            <Flex
              backgroundImage={"url(images/writing.jpg)"}
              backgroundSize="cover"
              h="600px"
              w="70vw"
            >
              <VStack
                background="blackAlpha.800"
                py="10px"
                justify="center"
                w="50%"
              >
                <Text color="white" fontSize="2xl" pb="10px">
                  Copywriting
                </Text>
                <Text color="white" px="30px" textAlign="center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore et, dolor culpa consequatur ipsam laudantium aut saepe
                  ad quis modi a, nisi aliquam suscipit nesciunt harum magnam
                  accusamus? Mollitia, voluptas.
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}
