import { Heading, VStack, Image, Flex, Text } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Background from "../../components/Background";
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
        <VStack gap="30px" maxW="1200px" px="20px" w="100%">
          <Heading
            color="white"
            fontWeight="800"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
            textAlign="center"
          >
            Postprodukce
          </Heading>

          <Service
            heading="Offline střih"
            text="Avid Media Composer, Adobe Premiere Pro, Final Cut Pro"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/video-editing_bfiutj.jpg"
          />

          <Service
            heading="Barevné korekce"
            text="DaVinci Resolve Studio"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/color_gafyjl.jpg"
            reverse
          />

          <Service
            heading="VFX and Motion Graphic"
            text="Adobe After Effects, Nuke"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/vfx_qle3ru.jpg"
          />

          <Service
            heading="Grafické práce"
            text="Adobe Illustrator, Adobe Photoshop"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/grafic_sssqjt.jpg"
            reverse
          />

          <Service
            heading="Animace"
            text="3D Max"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/animation_o5kkkw.jpg"
          />

          <Service
            heading="Zvuková postprodukce"
            text="Avid Pro Tools"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/sound_jymab1.jpg"
            reverse
          />

          <Service
            heading="Dramaturgie"
            text="Střihová dramaturgie"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/dramaturgy_hriwce.jpg"
          />

          <Service
            heading="Workshopy"
            text="Offline střih, Barevné korekce"
            src="https://res.cloudinary.com/dvez2ui2g/image/upload/c_scale,h_1064,q_70/v1657702201/nyla/workshop_xfstc3.jpg"
            reverse
          />
        </VStack>
      </Flex>
    </>
  );
}
