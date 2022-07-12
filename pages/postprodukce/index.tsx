import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Postprodukce() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      pt="150px"
      gap="100px"
      pb="60px"
      position="absolute"
      zIndex="2"
    >
      <VStack w="100%" h="100%" gap="20px" justify="center">
        <Heading
          color="white"
          fontWeight="800"
          fontSize="6xl"
          letterSpacing="-2px"
        >
          Co používáme za software
        </Heading>
        <VStack w="100%" h="100%" justify="center" px="20px" gap="20px">
          <HStack gap="20px" w="100%" justify="center">
            <VStack data-aos="fade-down" data-aos-delay="0">
              <Image src="/images/davinci.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                DaVinci Resolve Studio
              </Text>
            </VStack>
            <VStack data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/premiere.svg" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Adobe Premiere Pro
              </Text>
            </VStack>
            <VStack data-aos="fade-down" data-aos-delay="300">
              <Image src="/images/avid.jpg" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Avid Media Composer
              </Text>
            </VStack>
            <VStack data-aos="fade-up" data-aos-delay="400">
              <Image src="/images/after.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Adobe After Effects
              </Text>
            </VStack>
          </HStack>
          <HStack gap="20px" w="100%" justify="center">
            <VStack data-aos="fade-down" data-aos-delay="500">
              <Image src="/images/photoshop.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Adobe Photoshop
              </Text>
            </VStack>
            <VStack data-aos="fade-up" data-aos-delay="600">
              <Image src="/images/protools.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Avid Pro Tools
              </Text>
            </VStack>
            <VStack data-aos="fade-down" data-aos-delay="700">
              <Image src="/images/3d.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                3D Max
              </Text>
            </VStack>
            <VStack data-aos="fade-up" data-aos-delay="800">
              <Image src="/images/illustrator.png" w="200px" />
              <Text textAlign="center" color="white" fontWeight="semibold">
                Adobe Illustrator
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
}
