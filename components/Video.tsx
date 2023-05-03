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
  const [videoHovered, setVideoHovered] = useState(false);

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
                  color="rgb(224, 224, 224)"
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
                    fontSize="19px"
                    letterSpacing="0px"
                    flexDir="column"
                    gap="10px"
                    w="100%"
                  >
                    <Flex w="100%" justify="center" align="center">
                      <Text fontSize="23px" w="80%" whiteSpace="pre-line">
                        {text}
                      </Text>
                    </Flex>
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

                {!ntk && (
                  <Flex w="100%" justify="center" align="center">
                    <Text
                      data-aos="fade-up"
                      data-aos-duration="700"
                      color="rgb(224, 224, 224)"
                      textAlign="center"
                      fontWeight="semibold"
                      fontSize="2xl"
                      letterSpacing="0px"
                      w="80%"
                      whiteSpace="pre-line"
                    >
                      {text}
                    </Text>
                  </Flex>
                )}
              </VStack>
              <Flex
                justify="center"
                align="center"
                w="50%"
                onMouseEnter={() => {
                  setVideoHovered(true);
                }}
                onMouseLeave={() => {
                  setVideoHovered(false);
                }}
              >
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay
                    color={videoHovered && "#fff"}
                    size={videoHovered ? "150px" : "100px"}
                    style={{
                      transitionProperty: "all",
                      transitionDuration: "200ms",
                    }}
                    onClick={handleClick}
                  />
                </Flex>
                <Image src={src} w="100%" />
              </Flex>
            </Flex>
          </Flex>
          <Flex display={["flex", "flex", "flex", "none"]}>
            <VStack w="100%" h="100%" pb="40px" gap="30px">
              <VStack justify="center" align="center" px="20px">
                <Heading
                  color="rgb(224, 224, 224)"
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
                    <Flex w="100%" justify="center" align="center">
                      <Text
                        fontSize={["20px", "20px", "20px", "25px"]}
                        paddingBottom="8px"
                        color="rgb(224, 224, 224)"
                        w="80%"
                        whiteSpace="pre-line"
                      >
                        {text}
                      </Text>
                    </Flex>
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

                {text && !ntk && (
                  <Flex
                    color="rgb(224, 224, 224)"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize={["18px", "18px", "18px", "22px"]}
                    letterSpacing="0px"
                    flexDir="column"
                    gap="5px"
                    w="100%"
                    justify="center"
                    align="center"
                  >
                    <Text
                      fontSize={["20px", "20px", "20px", "25px"]}
                      paddingBottom="8px"
                      color="rgb(224, 224, 224)"
                      w="80%"
                      whiteSpace="pre-line"
                    >
                      {text}
                    </Text>
                  </Flex>
                )}
              </VStack>
              <Flex
                justify="center"
                align="center"
                onMouseEnter={() => {
                  setVideoHovered(true);
                }}
                onMouseLeave={() => {
                  setVideoHovered(false);
                }}
              >
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay
                    color={videoHovered && "#fff"}
                    size={videoHovered ? "150px" : "100px"}
                    style={{
                      transitionProperty: "all",
                      transitionDuration: "200ms",
                    }}
                    onClick={handleClick}
                  />
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
              <Flex
                justify="center"
                align="center"
                w="50%"
                onMouseEnter={() => {
                  setVideoHovered(true);
                }}
                onMouseLeave={() => {
                  setVideoHovered(false);
                }}
              >
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay
                    color={videoHovered && "#fff"}
                    size={videoHovered ? "150px" : "100px"}
                    style={{
                      transitionProperty: "all",
                      transitionDuration: "200ms",
                    }}
                    onClick={handleClick}
                  />
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
                  color="rgb(224, 224, 224)"
                  fontWeight="800"
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                <Flex w="100%" justify="center" align="center">
                  <Text
                    data-aos="fade-up"
                    data-aos-duration="700"
                    color="rgb(224, 224, 224)"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize="2xl"
                    letterSpacing="0px"
                    w="80%"
                    whiteSpace="pre-line"
                  >
                    {text}
                  </Text>
                </Flex>
              </VStack>
            </Flex>
          </Flex>
          <Flex display={["flex", "flex", "flex", "none"]}>
            <VStack w="100%" h="100%" pb="40px" gap="30px">
              <VStack justify="center" align="center" px="20px">
                <Heading
                  color="rgb(224, 224, 224)"
                  fontWeight="800"
                  fontSize={headingFontSize}
                  letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
                  textAlign="center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {nadpis}
                </Heading>

                {text && !ntk && (
                  <Flex
                    color="rgb(224, 224, 224)"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    textAlign="center"
                    fontWeight="semibold"
                    fontSize={["18px", "18px", "18px", "22px"]}
                    letterSpacing="0px"
                    flexDir="column"
                    gap="5px"
                    w="100%"
                    justify="center"
                    align="center"
                  >
                    <Text
                      fontSize={["20px", "20px", "20px", "25px"]}
                      paddingBottom="8px"
                      color="rgb(224, 224, 224)"
                      w="80%"
                      whiteSpace="pre-line"
                    >
                      {text}
                    </Text>
                  </Flex>
                )}
              </VStack>
              <Flex
                justify="center"
                align="center"
                onMouseEnter={() => {
                  setVideoHovered(true);
                }}
                onMouseLeave={() => {
                  setVideoHovered(false);
                }}
              >
                <Flex position="absolute" justify="center" cursor="pointer">
                  <BiPlay
                    color={videoHovered && "#fff"}
                    size={videoHovered ? "150px" : "100px"}
                    style={{
                      transitionProperty: "all",
                      transitionDuration: "200ms",
                    }}
                    onClick={handleClick}
                  />
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
