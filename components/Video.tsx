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
}: {
  nadpis: string;
  text: string;
  src: string;
  videoSrc: string;
}) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <>
      {opened && <VideoFrame handleClick={handleClick} src={videoSrc} />}
      <Flex
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-once="true"
        data-aos-offset="20"
        display={["none", "none", "none", "flex"]}
      >
        <Flex w="100%" h="100%">
          <VStack justify="center" align="center" gap="40px" px="20px" w="50%">
            <Heading
              color="white"
              fontWeight="800"
              fontSize="6xl"
              letterSpacing="-2px"
              textAlign="center"
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
      <Flex
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-once="true"
        data-aos-offset="4"
        display={["flex", "flex", "flex", "none"]}
      >
        <VStack w="100%" h="100%" pb="40px" gap="30px">
          <VStack justify="center" align="center" px="20px">
            <Heading
              color="white"
              fontWeight="800"
              fontSize="5xl"
              letterSpacing="-2px"
              textAlign="center"
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
  );
}
