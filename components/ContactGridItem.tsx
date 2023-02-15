import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

export const ContactGridItem: React.FC<{
  src: string;
  heading: string;
  text: string;
  last?: boolean;
}> = ({ src, heading, text, last }) => {
  return (
    <GridItem
      h="500px"
      background="rgba(255, 255, 255, 0.11)"
      borderRadius="8px"
      p="20px"
      _hover={{
        backgroundColor: "var(--chakra-colors-whiteAlpha-300)",
      }}
      transitionProperty="all"
      transitionDuration="200ms"
      className={last && "last-one"}
    >
      <Flex flexDir="column" w="100%" h="100%">
        <Flex justify="center" align="center">
          <Image
            w={["120px", "160px", "160px", "160px"]}
            h={["120px", "160px", "160px", "160px"]}
            src={src}
            borderRadius="50%"
            alt={heading}
          />
        </Flex>
        <Text
          w="100%"
          textAlign="center"
          mt="20px"
          fontSize="2rem"
          fontWeight="700"
        >
          {heading}
        </Text>
        <Text
          w="100%"
          textAlign="center"
          mt="10px"
          fontSize="1.3rem"
          fontWeight="600"
        >
          {text}
        </Text>
        <Flex w="100%" h="100%" align="center">
          <Flex flexDir="column" gap="10px" align="center" w="100%">
            <AiFillPhone color="white" size="50px" />
            <Text
              color="white"
              textAlign="center"
              fontWeight="semibold"
              fontSize="1rem"
            >
              +420 775 322 101
            </Text>
          </Flex>
          <Flex flexDir="column" gap="10px" align="center" w="100%">
            <AiFillMail color="white" size="50px" />
            <Text
              color="white"
              textAlign="center"
              fontWeight="semibold"
              fontSize="1rem"
            >
              info@nyla.cz
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};
