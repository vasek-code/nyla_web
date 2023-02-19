import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
  Grid,
  Button,
  Box,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { ServicesGridItem } from "../../components/ServicesGridItem";
import Video from "../../components/Video";
import { VideoFrame } from "../../components/VideoFrame";

export default function Postprodukce() {
  const [opened, setOpened] = useState(false);

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <>
      {opened && (
        <VideoFrame
          handleClick={handleClick}
          src="https://player.vimeo.com/video/235535760?h=312f67fe22"
        />
      )}
      <style jsx global>
        {`
          .service-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          @media screen and (max-width: 1216px) {
            .service-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media screen and (max-width: 596px) {
            .service-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
      <Box
        w="100%"
        minH="100vh"
        pt={["80px", "80px", "100px", "100px"]}
        position="absolute"
        zIndex="2"
        overflow="hidden"
        pb="20px"
      >
        <Flex w="100%" h="100%" flexDir="column" align="center">
          <Text
            textAlign="center"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            fontWeight="800"
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
            w="100%"
            my="15px"
          >
            Naše služby
          </Text>
          <Flex
            w="100%"
            h="fill"
            justify="center"
            align="center"
            mt="20px"
            flexDir="column"
          >
            <Grid rowGap="20px" columnGap="30px" className="service-grid">
              <ServicesGridItem
                heading="COPYWRITING"
                text="Print, Online, Video"
                src="/images/development.png"
              />
              <ServicesGridItem
                heading="VIDEO MARKETING"
                text="Nápad, Výroba, Digitál"
                src="/images/camera.png"
              />
              <ServicesGridItem
                heading="PRODUCTION SERVICE"
                text="AVD, Eventy, Workshopy"
                src="/images/executive.png"
              />
              <ServicesGridItem
                heading="POSTPRODUCTION"
                text="Graphics, Offline, Color Correction, Sound, VFX"
                src="/images/postproduction.png"
              />
            </Grid>
            <Flex maxW="600px" justify="center" pt="20px" flexDir="column">
              <Text
                fontSize="30px"
                fontWeight="600"
                textAlign="center"
                py="10px"
              >
                Showreel
              </Text>

              <Flex justify="center" align="center">
                <Flex
                  position="absolute"
                  justify="center"
                  cursor="pointer"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <BiPlay color="white" size="100px" />
                </Flex>
                <Image w="100%" src="images/ntkthumbnail2.png" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
