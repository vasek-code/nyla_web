import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Postprodukce() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      pt="110px"
      gap="100px"
      pb="60px"
      position="absolute"
      zIndex="2"
    >
      <VStack w="100%" h="100%" gap="20px" justify="center">
        <Heading
          color="white"
          fontWeight="800"
          fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
          letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
          textAlign="center"
        >
          Co používáme za software
        </Heading>
        <VStack w="100%" h="100%" px={["10px", "20px", "20px", "20px"]}>
          <Grid
            gap="20px"
            maxW="1000px"
            gridTemplateColumns={[
              "1fr 1fr",
              "1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
            ]}
            rowGap="30px"
          >
            <VStack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="0"
              justify="center"
              align="center"
            >
              <Image src="/images/davinci.png" w="200px" alt="davinci" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                DaVinci Resolve Studio
              </Text>
            </VStack>
            <VStack
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              justify="center"
              align="center"
            >
              <Image src="/images/premiere.svg" w="200px" alt="premiere" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Adobe Premiere Pro
              </Text>
            </VStack>
            <VStack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              justify="center"
              align="center"
            >
              <Image src="/images/avid.jpg" w="200px" alt="avid" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Avid Media Composer
              </Text>
            </VStack>
            <VStack
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="400"
              justify="center"
              align="center"
            >
              <Image src="/images/after.png" w="200px" alt="after effects" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Adobe After Effects
              </Text>
            </VStack>

            <VStack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
              justify="center"
              align="center"
            >
              <Image src="/images/photoshop.png" w="200px" alt="photoshop" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Adobe Photoshop
              </Text>
            </VStack>
            <VStack
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="600"
              justify="center"
              align="center"
            >
              <Image src="/images/protools.png" w="200px" alt="protools" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Avid Pro Tools
              </Text>
            </VStack>
            <VStack
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="700"
              justify="center"
              align="center"
            >
              <Image src="/images/3d.png" w="200px" alt="3d" />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                3D Max
              </Text>
            </VStack>
            <VStack
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
              justify="center"
              align="center"
            >
              <Image
                src="/images/illustrator.png"
                w="200px"
                alt="illustrator"
              />
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              >
                Adobe Illustrator
              </Text>
            </VStack>
          </Grid>
        </VStack>
      </VStack>
    </Flex>
  );
}
