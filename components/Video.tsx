/* eslint-disable jsx-a11y/alt-text */
import { Heading, HStack, VStack, Text, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { VideoFrame } from "./VideoFrame";

export default function Video({
  nadpis,
  text,
  src,
  videoSrc,
  reverse,
}: {
  nadpis: string;
  text: string;
  src: string;
  videoSrc: string;
  reverse?: boolean;
}) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <>
      {opened && <VideoFrame handleClick={handleClick} src={videoSrc} />}
      {reverse ? (
        <>
          {" "}
          <Flex display={["none", "none", "none", "flex"]}>
            <Flex w="100%" h="100%">
              <VStack
                justify="center"
                align="center"
                gap="40px"
                px="20px"
                w="50%"
              >
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={["2.5rem", "2.5rem", "3rem", "3.5rem"]}
                  letterSpacing="-2px"
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {/* <Text
              color="white"
              textAlign="center"
              fontWeight="semibold"
              fontSize="2xl"
              letterSpacing="0px"
            >
              {text}
            </Text> */}
              </VStack>
              <Flex justify="center" align="center" w="50%">
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay color="white" size="100px" onClick={handleClick} />
                </Flex>
                <Image src={src} w="100%" />
              </Flex>
            </Flex>
          </Flex>
          <Flex display={["flex", "flex", "flex", "none"]}>
            <VStack w="100%" h="100%" pb="40px" gap="30px">
              <VStack justify="center" align="center" px="20px">
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={["2.5rem", "2.5rem", "3rem", "3.5rem"]}
                  letterSpacing="-2px"
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {/* <Text color="white" textAlign="center">
              {text}
            </Text> */}
              </VStack>
              <Flex justify="center" align="center">
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay color="white" size="100px" onClick={handleClick} />
                </Flex>
                <Image w="1000px" src={src} />
              </Flex>
            </VStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex display={["none", "none", "none", "flex"]}>
            <Flex w="100%" h="100%">
              <Flex justify="center" align="center" w="50%">
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay color="white" size="100px" onClick={handleClick} />
                </Flex>
                <Image src={src} />
              </Flex>
              <VStack
                justify="center"
                align="center"
                gap="40px"
                px="20px"
                w="50%"
              >
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={["2.5rem", "2.5rem", "3rem", "3.5rem"]}
                  letterSpacing="-2px"
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {/* <Text
              color="white"
              textAlign="center"
              fontWeight="semibold"
              fontSize="2xl"
              letterSpacing="0px"
            >
              {text}
            </Text> */}
              </VStack>
            </Flex>
          </Flex>
          <Flex display={["flex", "flex", "flex", "none"]}>
            <VStack w="100%" h="100%" pb="40px" gap="30px">
              <VStack justify="center" align="center" px="20px">
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={["2.5rem", "2.5rem", "3rem", "3.5rem"]}
                  letterSpacing="-2px"
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {/* <Text color="white" textAlign="center">
              {text}
            </Text> */}
              </VStack>
              <Flex justify="center" align="center">
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay color="white" size="100px" onClick={handleClick} />
                </Flex>
                <Image w="100%" src={src} />
              </Flex>
            </VStack>
          </Flex>
        </>
      )}
    </>
  );
}
