import { Heading, VStack, Image, Flex, Text } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Background from "../../components/Background";
import ScrollToTopButton from "../../components/ScrollToTop";
import { Service } from "../../components/Service";

export default function Sluzby() {
  useEffect(() => {}, []);

  return (
    <>
      <Flex
        w="100%"
        minH="100vh"
        pt="110px"
        gap="100px"
        pb="60px"
        position="absolute"
        zIndex="2"
        justify="center"
      >
        <VStack gap="30px" maxW="1200px" px="20px" w="100%" pt="15px">
          <Heading
            color="white"
            fontWeight="800"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
            textAlign="center"
          >
            Postprodukce
          </Heading>

          <Text textAlign="center" fontSize="20px">
            V našem postprodukčním Studiu za komínem vám poskytneme zázemí na
            míru pro váš projekt. Od barevných korekcí krátkého reklamního spotu
            až po kompletní postprodukci celovečerního filmu.
          </Text>

          <Image src="images/logost.svg" width="200px" />

          <Service
            heading="Offline střih"
            text="Avid Media Composer, Adobe Premiere Pro, Final Cut Pro"
            src="images/video-editing.jpg"
          />

          <Service
            heading="Barevné korekce"
            text="DaVinci Resolve Studio"
            src="images/color.jpg"
            reverse
          />

          <Service
            heading="VFX and Motion Graphic"
            text="Adobe After Effects, Nuke"
            src="images/vfx.jpg"
          />

          <Service
            heading="Grafické práce"
            text="Adobe Illustrator, Adobe Photoshop"
            src="images/grafic.jpg"
            reverse
          />

          <Service heading="Animace" text="3D Max" src="images/animation.jpg" />

          <Service
            heading="Zvuková postprodukce"
            text="Avid Pro Tools"
            src="images/sound.jpg"
            reverse
          />

          <Service
            heading="Dramaturgie"
            text="Střihová dramaturgie"
            src="images/dramaturgy.jpg"
          />

          <Service
            heading="Workshopy"
            text="Offline střih, Barevné korekce"
            src="images/workshop.jpg"
            reverse
          />
          <ScrollToTopButton />
        </VStack>
      </Flex>
    </>
  );
}
