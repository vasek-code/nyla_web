/* eslint-disable @next/next/no-img-element */
import { Button, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

export const ServicesGridItem: React.FC<{
  heading: string;
  text: string;
  src: string;
}> = ({ heading, src, text }) => {
  return (
    <GridItem
      w="270px"
      h="320px"
      background="rgba(255, 255, 255, 0.11)"
      borderRadius="8px"
      p="20px"
      _hover={{
        backgroundColor: "var(--chakra-colors-whiteAlpha-300)",
      }}
      transitionProperty="all"
      transitionDuration="200ms"
    >
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        align="center"
        justify="center"
        gap="20px"
      >
        <Flex h="60px" align="center">
          <Text
            fontWeight="700"
            fontSize={["1.3rem", "1.3rem", "1.3rem", "1.3rem"]}
            textAlign="center"
            w="100%"
          >
            {heading}
          </Text>
        </Flex>
        <Flex w="100%" justify="center" align="center" height="120px">
          <Image src={src} alt={heading} maxHeight="100px" height="100%" />
        </Flex>
        <Flex h="60px" align="center">
          <Text textAlign="center" w="100%" fontSize="1.2rem" fontWeight="600">
            {text}
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};
