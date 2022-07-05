import { Heading, HStack, VStack, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BiPlay } from "react-icons/bi";

export default function VideoReverse({
  nadpis,
  text,
  src,
}: {
  nadpis: string;
  text: string;
  src: string;
}) {
  return (
    <>
      <Flex
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-once="true"
        data-aos-offset="20"
        display={["none", "none", "flex", "flex"]}
      >
        <HStack gap="20px" w="100%" h="100%">
          <Flex justify="center" align="center" w="50%">
            <Flex position="absolute" justify="center" cursor="pointer">
              <BiPlay color="white" size="100px" />
            </Flex>
            <Image __css={{ aspectRatio: "16/9" }} src={src} />
          </Flex>
          <VStack justify="center" align="center" gap="40px" px="20px" w="50%">
            <Heading color="white">{nadpis}</Heading>
            <Text color="white" textAlign="center">
              {text}
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-once="true"
        data-aos-offset="20"
        display={["flex", "flex", "none", "none"]}
      >
        <VStack w="100%" h="100%" pb="80px" gap="30px">
          <VStack justify="center" align="center" px="20px">
            <Heading color="white">{nadpis}</Heading>
            <Text color="white" textAlign="center">
              {text}
            </Text>
          </VStack>
          <Flex justify="center" align="center">
            <Flex position="absolute" justify="center" cursor="pointer">
              <BiPlay color="white" size="100px" />
            </Flex>
            <Image __css={{ aspectRatio: "16/9" }} w="100%" src={src} />
          </Flex>
        </VStack>
      </Flex>
    </>
  );
}
