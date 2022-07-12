import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const Service: React.FC<{
  heading: string;
  text: string;
  src: string;
  reverse?: boolean;
}> = ({ heading, text, src, reverse }) => {
  return (
    <VStack
      gap="20px"
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-once="true"
      w="100%"
    >
      <Flex
        backgroundImage={`url(${src})`}
        backgroundSize="cover"
        h="600px"
        minW="100%"
        w="100%"
        justify={reverse && "flex-end"}
      >
        <VStack
          background="blackAlpha.700"
          py="10px"
          justify="center"
          w={["100%", "100%", "100%", "50%"]}
        >
          <Text
            color="white"
            fontSize="4xl"
            fontWeight="600"
            pb="10px"
            textAlign="center"
          >
            {heading}
          </Text>
          <Text color="white" px="30px" fontSize="large" textAlign="center">
            {text}
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
};
