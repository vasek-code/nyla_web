import React from "react";
import Image from "next/image";
import { Flex, GridItem, Text, Button } from "@chakra-ui/react";

export const CompanyCard: React.FC<{
  src: string;
  text: string;
  webSrc: string;
}> = ({ src, text, webSrc }) => {
  return (
    <GridItem
      w="200px"
      h="220px"
      backgroundColor="rgba(255, 255, 255, 0.11)"
      transitionProperty="background-color"
      transitionDuration="200ms"
      borderRadius="10px"
    >
      <Flex h="60%" w="100%" justify="center" align="center">
        <Image width="100%" layout="fixed" height="100%" src={src} alt={src} />
      </Flex>
      <Flex
        h="40%"
        w="100%"
        borderRadius="10px"
        justify="center"
        align="center"
        p="20px"
      >
        <a href={webSrc} target="_blank" rel="noreferrer">
          <Button
            w="170px"
            h="60px"
            background="whiteAlpha.300"
            _hover={{
              background: "var(--chakra-colors-whiteAlpha-400)",
            }}
          >
            <Text fontSize="1.5rem" fontWeight="600">
              {text || "ahoj"}
            </Text>
          </Button>
        </a>
      </Flex>
    </GridItem>
  );
};
