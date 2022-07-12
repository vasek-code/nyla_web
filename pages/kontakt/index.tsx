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
    <Flex
      w="100%"
      minH="100vh"
      pt="150px"
      gap="100px"
      pb="60px"
      position="absolute"
      zIndex="2"
    >
      <VStack w="100%" h="100%" gap="20px" justify="center">
        <Heading
          color="white"
          fontWeight="800"
          fontSize="6xl"
          letterSpacing="-2px"
        >
          Kontakt
        </Heading>
        <HStack gap="80px" pb="10px" px="20px">
          <VStack data-aos="fade-down">
            <Image src="/images/lukas.png" width="250px" />
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
            <Image src="/images/ondrej.png" width="250px" />
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

          <Flex w="100%" justifyContent="center" gap="20%">
            <VStack gap="10px" h="100%" justify="flex-start">
              <AiFillPhone color="white" size="100px" />
              <Text
                color="white"
                textAlign="center"
                fontWeight="semibold"
                fontSize="larger"
              >
                +420 775 322 101
              </Text>
            </VStack>
            <VStack gap="10px" h="100%" justify="flex-start">
              <AiFillMail color="white" size="100px" />
              <Text
                color="white"
                textAlign="center"
                fontWeight="semibold"
                fontSize="larger"
              >
                info@nyla.cz
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
}
