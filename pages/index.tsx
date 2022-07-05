import {
  Flex,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  Container,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Router from "next/router";
import Navbar from "../components/Navbar";
import { BiPlay } from "react-icons/bi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Background from "../components/Background";
import Video from "../components/Video";
import VideoReverse from "../components/VideoReverse";

export default function Home() {
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Flex
        w="100%"
        minH="100vh"
        pb="60px"
        flexDirection="column"
        position="absolute"
        zIndex="2"
        overflowY="hidden"
      >
        <Flex w="100%" h="100vh">
          <VStack w="100%" h="100%" justify="center" align="center">
            <Heading size="4xl" color="white">
              NYLA
            </Heading>
            <Flex py="10px">
              <Divider w="50px" opacity="1" />
            </Flex>
            <Heading color="white" size="md">
              VAŠE KREATIVNÍ AGENTURA
            </Heading>
            <Flex pt="20px">
              <BsFillArrowDownCircleFill
                style={{ cursor: "pointer" }}
                color="white"
                size="70px"
                onClick={() => {
                  scrollBy({
                    top: viewHeight - 120,
                    behavior: "smooth",
                  });
                }}
              />
            </Flex>
          </VStack>
        </Flex>
        <Video
          nadpis="NADPIS"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="/images/1.jpg"
        />
        <VideoReverse
          nadpis="NADPIS"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="/images/1.jpg"
        />
        <Video
          nadpis="NADPIS"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="/images/1.jpg"
        />
      </Flex>
    </>
  );
}
