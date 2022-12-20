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
  ntk,
}: {
  nadpis: string;
  text?: string;
  src: string;
  videoSrc: string;
  reverse?: boolean;
  ntk?: boolean;
}) {
  const [opened, setOpened] = useState(false);
  const [openedLink, setOpenedLink] = useState(false);
  const [link, setLink] = useState("");

  const headingFontSize = ["2.2rem", "2.3rem", "2.3rem", "2.5rem", "3rem"];

  const handleClick = () => {
    setOpened(!opened);
  };

  const handleLinkClick = () => {
    setOpenedLink(!openedLink);
  };

  return (
    <>
      {opened && <VideoFrame handleClick={handleClick} src={videoSrc} />}
      {openedLink && <VideoFrame handleClick={handleLinkClick} src={link} />}
      {reverse ? (
        <>
          {" "}
          <Flex display={["none", "none", "none", "flex"]}>
            <Flex w="100%" h="100%">
              <VStack
                justify="center"
                align="center"
                gap="10px"
                px="20px"
                w="50%"
              >
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {!ntk && (
                  <Text
                    data-aos="fade-up"
                    data-aos-duration="700"
                    color="white"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize="2xl"
                    letterSpacing="0px"
                  >
                    {text}
                  </Text>
                )}

                {ntk && text && (
                  <Flex
                    data-aos="fade-up"
                    data-aos-duration="700"
                    color="white"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize="19px"
                    letterSpacing="0px"
                    flexDir="column"
                    gap="10px"
                  >
                    <Text fontSize="23px">{text}</Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="5px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/d2d_MudZ1tw");
                        setOpenedLink(true);
                      }}
                    >
                      Vědecká komunikace - vědecké publikování
                    </Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="8px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/JVRGBznnBF8");
                        setOpenedLink(true);
                      }}
                    >
                      CzechELib - Národní centrum pro elektronické informační
                      zdroje
                    </Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="8px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/MAMaoFYcMSs");
                        setOpenedLink(true);
                      }}
                    >
                      Otevřený přístup k vědeckým publikacím - Open Access
                    </Text>
                  </Flex>
                )}
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
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {ntk && text && (
                  <Flex
                    data-aos="fade-up"
                    data-aos-duration="700"
                    color="white"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize={["18px", "18px", "18px", "22px"]}
                    letterSpacing="0px"
                    flexDir="column"
                    gap="5px"
                  >
                    <Text
                      fontSize={["20px", "20px", "20px", "25px"]}
                      paddingBottom="8px"
                    >
                      {text}
                    </Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="5px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/d2d_MudZ1tw");
                        setOpenedLink(true);
                      }}
                    >
                      Vědecká komunikace - vědecké publikování
                    </Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="8px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/JVRGBznnBF8");
                        setOpenedLink(true);
                      }}
                    >
                      CzechELib - Národní centrum pro elektronické informační
                      zdroje
                    </Text>
                    <Text
                      _hover={{
                        background: "whiteAlpha.400",
                        cursor: "pointer",
                      }}
                      padding="8px"
                      background="whiteAlpha.300"
                      borderRadius="10px"
                      transition="all"
                      color="gray.300"
                      onClick={() => {
                        setLink("https://www.youtube.com/embed/MAMaoFYcMSs");
                        setOpenedLink(true);
                      }}
                    >
                      Otevřený přístup k vědeckým publikacím - Open Access
                    </Text>
                  </Flex>
                )}

                {text && <Flex>{text}</Flex>}
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
                gap="10px"
                px="20px"
                w="50%"
              >
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                <Text
                  data-aos="fade-up"
                  data-aos-duration="700"
                  color="white"
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize="2xl"
                  letterSpacing="0px"
                >
                  {text}
                </Text>
              </VStack>
            </Flex>
          </Flex>
          <Flex display={["flex", "flex", "flex", "none"]}>
            <VStack w="100%" h="100%" pb="40px" gap="30px">
              <VStack justify="center" align="center" px="20px">
                <Heading
                  color="white"
                  fontWeight="800"
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
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
