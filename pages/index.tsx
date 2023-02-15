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
  Grid,
  Box,
} from "@chakra-ui/react";
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Video from "../components/Video";
import { CompanyCard } from "../components/CompanyCard";

export default function Home() {
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <>
      <style jsx global>
        {`
          @media (max-width: 1150px) {
            .customers-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          @media (max-width: 920px) {
            .customers-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 690px) {
            .customers-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 460px) {
            .customers-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
      <Flex
        w="100%"
        minH="100vh"
        flexDirection="column"
        position="absolute"
        zIndex="2"
        overflowY="hidden"
        overflow="auto"
      >
        <Flex w="100%" h="100vh">
          <VStack w="100%" h="100%" justify="center" align="center">
            {/* <Heading size="4xl" color="white">
              NYLA
            </Heading> */}
            <Image src="/images/logo.png" w="250px" alt="logo" />
            <Flex py="10px">
              <Divider w="50px" opacity="1" background="white" />
            </Flex>
            <Flex px="20px" flexDir="column">
              <Text
                fontWeight="800"
                fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
                mb="10px"
                textAlign="center"
              >
                VAŠE KREATIVNÍ AGENTURA
              </Text>
              <Text
                color="white"
                textAlign="center"
                maxW="500px"
                fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
                fontWeight="500"
              >
                která Vás vtáhne do děje! Jsme tu pro vás od roku 2011.
                Zajišťujeme vývoj a výrobu audiovizuálních děl pro komunikační,
                digitální či eventové agentury, ale i přímo pro klienty.
              </Text>
            </Flex>
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
          </VStack>
        </Flex>

        <Video
          nadpis="CzechELib"
          text="Série videí o činnosti Národního centra pro elektronické informační zdroje"
          src="images/ntkthumbnail.png"
          videoSrc="https://www.youtube.com/embed/ByA9Y7Bv9Ss"
          reverse
          ntk
        />
        <Video
          nadpis="A MARRIAGE"
          src="https://i.vimeocdn.com/video/936897097-884e67980ff15aecd4f8df7d9d6f012495faa80458fa2aa6647d26ffb4d51d2f-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/233473364"
          ntk={false}
          text="Kamera a postprodukce"
        />
        <Video
          nadpis="Lucie Bílá - Mám ráda život"
          src="images/lucie.png"
          videoSrc="https://www.youtube.com/embed/wR3v1ZfcWzM"
          reverse
          text="Obrazová postprodukce"
        />
        <Video
          nadpis="The Last Lesson"
          src="https://i.vimeocdn.com/video/764539463-142b091204d67f2dcca5b99d62a8f18e751b284c62801b19416e7ac407780bdb-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/320433440"
          text="Kompletní produkce a postprodukce"
        />
        <Video
          nadpis="Exclusive Tours"
          src="images/more.png"
          videoSrc="https://www.youtube.com/embed/cWZfMEXvVPA"
          reverse
        />
        <Video
          nadpis="Girl Therapy - New End"
          src="https://i.vimeocdn.com/video/567298298-73b95fa179ca63abb1188dd8983128a97ade5ea09d6a2d15a4c4ce7148f659b7-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/163822866"
        />
        <Video
          nadpis="Volvo Trucks 20 let"
          src="images/volvo_thumbnail.png"
          videoSrc="https://www.youtube.com/embed/zFX3F2FrIOg"
          reverse
          text="Kompletní produkce a postprodukce"
        />
        <Video
          nadpis="Kampaň Tloustneme"
          src="https://i.vimeocdn.com/video/1331570366-14143053c416bbac5d8f3e68b6ea1d530baa0c2cfcfaa9dcf4c8b3c60fd1ef3c-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/659293949"
          text="Série spotů s Martinem Zounarem a videomedailonky s příběhy pacientů.
          Kompletní produkce"
        />
        <Video
          nadpis="D.Y.K. - You Don't Know Who I Am"
          src="https://i.ytimg.com/vi/G-ykGG6ZJ_0/sddefault.jpg"
          videoSrc="https://www.youtube.com/embed/G-ykGG6ZJ_0"
          text="Color correction, Color grading"
          reverse
        />
        <Video
          nadpis="ABB - EGO-N"
          src="https://i.vimeocdn.com/video/429633564-ad351e8154183294f8e09f1ff5acad35fc8fa9c0938023354f5f3569d8cbee2d-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/61793279"
          text="Reklamní spot pro společnost ABB ve spolupráci s reklamní agenturou Studio Rema 93"
        />
        <Video
          nadpis="Wavin Ecoplastik"
          src="https://i.vimeocdn.com/video/567624511-f4b2485ef97ff9e3afb67e94039152b21fc59c676e9d60b201d956af9a7e474e-d?mw=1500"
          videoSrc="https://player.vimeo.com/video/110729762"
          text="Kompletní produkce a postprodukce"
          reverse
        />
        <Video
          nadpis="Two Lions to Venice"
          src="https://image.pmgstatic.com/cache/resized/w1989/files/images/film/photos/165/816/165816139_c9bf71.jpg"
          videoSrc="https://video.pmgstatic.com/files/videos/157/776/157776122/165071176_9b316a.mp4"
          text="Střih a kompletní postprodukce"
        />
        <Flex minH="850px" w="100%" flexDir="column" align="center">
          <Text
            w="100%"
            textAlign="center"
            fontWeight="800"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
            pt={["80px", "80px", "100px", "100px"]}
          >
            Naši klienti
          </Text>
          <Grid
            p="20px"
            gridTemplateColumns="repeat(5, 1fr)"
            gap="20px"
            pt="30px"
            className="customers-grid"
          >
            <CompanyCard
              src="/images/abb.png"
              text="ABB"
              webSrc="https://new.abb.com/cz"
            />
            <CompanyCard
              src="/images/alef.png"
              text="ALEF"
              webSrc="https://www.alef.com/cz/"
            />
            <CompanyCard
              src="/images/dolnipocernice.png"
              text="PDP"
              webSrc="https://praha-dolnipocernice.cz/"
            />
            <CompanyCard
              src="/images/fudokan.png"
              text="FUDOKAN"
              webSrc="https://www.fudokan.cz/"
            />
            <CompanyCard
              src="/images/meatfactory.png"
              text="Meet Factory"
              webSrc="http://www.meetfactory.cz/"
            />
            <CompanyCard
              src="/images/pragueboats.png"
              text="PRAGUE BOATS"
              webSrc="https://www.prague-boats.cz/"
            />
            <CompanyCard
              src="/images/prozeta.png"
              text="PROZETA"
              webSrc="https://www.prozeta.eu/"
            />
            <CompanyCard
              src="/images/remark.png"
              text="REMA93"
              webSrc="http://www.studiorema93.cz/"
            />
            <CompanyCard
              src="/images/verahampl.png"
              text="VERA HAMPL"
              webSrc="https://www.vharchitects.com/"
            />
            <CompanyCard
              src="/images/wavin.png"
              text="WAVIN"
              webSrc="https://www.wavinekoplastik.com/"
            />
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
