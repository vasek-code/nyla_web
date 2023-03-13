import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

export const ContactGridItem: React.FC<{
  src: string;
  heading: string;
  text: string;
  last?: boolean;
  phone: string;
  email: string;
}> = ({ src, heading, text, last, email, phone }) => {
  return (
    <>
      <Flex flexDir="column" className={last && "last-one"}>
        <GridItem
          background="rgba(255, 255, 255, 0.11)"
          borderRadius="8px"
          p="20px"
          _hover={{
            backgroundColor: "var(--chakra-colors-whiteAlpha-300)",
          }}
          transitionProperty="all"
          transitionDuration="200ms"
        >
          <Flex w="100%" align="center" pb="10px" flexDir="column">
            <a
              style={{
                fontSize: "19px",
                fontWeight: "600",
              }}
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <a
              style={{
                fontSize: "19px",
                fontWeight: "600",
              }}
              href={`tel:+420-${phone.replace(/\s/g, "-")}`}
            >
              {phone}
            </a>
          </Flex>
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
              fontWeight="500"
            >
              {text}
            </Text>
          </Flex>
        </GridItem>
      </Flex>
    </>
  );
};
