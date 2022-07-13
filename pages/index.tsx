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
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Video from "../components/Video";

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
        flexDirection="column"
        position="absolute"
        zIndex="2"
        overflowY="hidden"
      >
        <Flex w="100%" h="100vh">
          <VStack w="100%" h="100%" justify="center" align="center">
            {/* <Heading size="4xl" color="white">
              NYLA
            </Heading> */}
            <Image
              src="/images/logoHDweb.png"
              w="500px"
              position="relative"
              top="60px"
              alt="logo"
            />
            <Flex py="10px">
              <Divider w="50px" opacity="1" />
            </Flex>
            <Heading color="white" size="lg" fontWeight="800">
              VAŠE KREATIVNÍ AGENTURA
            </Heading>
            <Flex pt="20px">
              <BsArrowDownCircle
                style={{ cursor: "pointer" }}
                color="white"
                size="50px"
                onClick={() => {
                  scrollBy({
                    top: viewHeight,
                    behavior: "smooth",
                  });
                }}
              />
            </Flex>
          </VStack>
        </Flex>
        <Flex
          w="100%"
          h="100vh"
          flexDir="column"
          justify="center"
          align="center"
          gap="20px"
        >
          <Text
            color="white"
            fontWeight="800"
            fontSize="6xl"
            letterSpacing="-2px"
            textAlign="center"
          >
            O nás
          </Text>
          <Text
            textAlign="center"
            maxW={["90%", "90%", "50%", "50%"]}
            fontSize={["larger", "larger", "2xl", "4xl"]}
            fontWeight="semibold"
          >
            Kreativní agentura, která Vás vtáhne do děje! Jsme tu pro vás od
            roku 2011. Zajišťujeme vývoj a výrobu audiovizuálních děl pro
            komunikační, digitální či eventové agentury, ale i přímo pro
            klienty.
          </Text>
          <Flex pt="20px">
            <BsArrowDownCircle
              style={{ cursor: "pointer" }}
              color="white"
              size="50px"
              onClick={() => {
                scrollBy({
                  top: viewHeight - 100,
                  behavior: "smooth",
                });
              }}
            />
          </Flex>
        </Flex>
        <Video
          nadpis="Two Lions To Venice"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.vimeocdn.com/video/780545027-208775626df8236030ab47d46dcd10cc82295b40669ead4540eda450dc6869d8-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/334302748"
          reverse
        />
        <Video
          nadpis="A MARRIAGE"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.vimeocdn.com/video/936897097-884e67980ff15aecd4f8df7d9d6f012495faa80458fa2aa6647d26ffb4d51d2f-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/233473364"
        />
        <Video
          nadpis="Lucie Bílá - Mám ráda život"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.ytimg.com/vi_webp/wR3v1ZfcWzM/sddefault.webp"
          videoSrc="https://www.youtube.com/embed/wR3v1ZfcWzM"
          reverse
        />
        <Video
          nadpis="A MARRIAGE"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.vimeocdn.com/video/764539463-142b091204d67f2dcca5b99d62a8f18e751b284c62801b19416e7ac407780bdb-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/320433440"
        />
        <Video
          nadpis="Exclusive Tours"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="	https://i.ytimg.com/vi_webp/cWZfMEXvVPA/sddefault.webp"
          videoSrc="https://www.youtube.com/embed/cWZfMEXvVPA"
          reverse
        />
        <Video
          nadpis="Girl Therapy - New End"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.vimeocdn.com/video/567298298-73b95fa179ca63abb1188dd8983128a97ade5ea09d6a2d15a4c4ce7148f659b7-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/163822866"
        />
        <Video
          nadpis="Volvo Trucks 20 let"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer malesuada. Integer lacinia. Fusce consectetuer risus a nunc. Aliquam ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Vivamus ac leo pretium faucibus. Etiam quis quam. Vestibulum fermentum tortor id mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Phasellus rhoncus."
          src="https://i.ytimg.com/vi_webp/zFX3F2FrIOg/sddefault.webp"
          videoSrc="https://www.youtube.com/embed/zFX3F2FrIOg"
          reverse
        />
      </Flex>
    </>
  );
}
