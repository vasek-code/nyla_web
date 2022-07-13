import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

export default function Kontakt() {
  return (
    <>
      <style jsx>
        {`
          * {
            overflow-y: hidden;
          }
        `}
      </style>
      <Flex
        w="100%"
        minH="100vh"
        pt="110px"
        gap="100px"
        pb="60px"
        position="absolute"
        zIndex="2"
        overflow="hidden"
      >
        <VStack w="100%" h="100%" gap="20px" justify="center">
          <Heading
            color="white"
            fontWeight="800"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
          >
            Kontakt
          </Heading>
          <HStack gap={["0px", "80px", "80px", "80px"]} pb="10px" px="20px">
            <VStack data-aos="fade-down">
              <Image src="/images/lukas.png" width="250px" alt="lukas mracek" />
              <Heading color="white" textAlign="center" fontSize="4xl">
                Lukáš Mráček
              </Heading>
              <Text
                color="white"
                textAlign="center"
                fontWeight="semibold"
                fontSize="larger"
              >
                Producer Executive Producer
              </Text>
            </VStack>
            <VStack data-aos="fade-up">
              <Image
                src="/images/ondrej.png"
                width="250px"
                alt="ondrej belica"
              />
              <Heading color="white" textAlign="center" fontSize="4xl">
                Ondřej Belica
              </Heading>
              <Text
                color="white"
                textAlign="center"
                fontWeight="semibold"
                fontSize="larger"
              >
                DOP Postproduction supervisor
              </Text>
            </VStack>
          </HStack>

          <VStack w="100%">
            <Text
              color="white"
              w="50%"
              textAlign="center"
              fontWeight="semibold"
              fontSize="larger"
            >
              Jste připraveni dělat další projekt s náma? Zavolejte anebo nám
              napište email a my se vám co nejdříve ozveme!
            </Text>

            <Flex
              maxW="600px"
              w="100%"
              justifyContent="center"
              gap={["20px", "20%", "20%", "20%"]}
            >
              <VStack gap="10px" h="100%" justify="flex-start" w="100%">
                <AiFillPhone color="white" size="100px" />
                <Text
                  color="white"
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize={["1rem", "larger", "larger", "larger"]}
                >
                  +420 775 322 101
                </Text>
              </VStack>
              <VStack gap="10px" h="100%" justify="flex-start" w="100%">
                <AiFillMail color="white" size="100px" />
                <Text
                  color="white"
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize={["1rem", "larger", "larger", "larger"]}
                >
                  info@nyla.cz
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}
